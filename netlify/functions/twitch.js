// netlify/functions/twitch.js

const TWITCH_TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_API_BASE = "https://api.twitch.tv/helix";

// ---------- Twitch helpers ----------

async function getAppToken() {
  const res = await fetch(TWITCH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials",
    }),
  });
  if (!res.ok) throw new Error("Failed to get Twitch app token");
  return (await res.json()).access_token;
}

async function refreshUserToken() {
  const res = await fetch(TWITCH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: process.env.TWITCH_USER_REFRESH_TOKEN,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      `Failed to refresh user token: ${err.message ?? res.status}`,
    );
  }
  const data = await res.json();

  // Persist new tokens to Netlify env vars so the next invocation uses them
  if (process.env.NETLIFY_ACCESS_TOKEN && process.env.NETLIFY_SITE_ID) {
    try {
      await fetch(
        `https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}/env`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`,
          },
          body: JSON.stringify([
            {
              key: "TWITCH_USER_ACCESS_TOKEN",
              values: [{ value: data.access_token, context: "production" }],
            },
            {
              key: "TWITCH_USER_REFRESH_TOKEN",
              values: [{ value: data.refresh_token, context: "production" }],
            },
          ]),
        },
      );
      console.log("Netlify env vars updated with refreshed Twitch tokens");
    } catch (e) {
      console.error(
        "Could not persist refreshed tokens to Netlify:",
        e.message,
      );
    }
  }

  return data.access_token;
}

// Validate the current user token and refresh if expired
async function getUserToken() {
  const currentToken = process.env.TWITCH_USER_ACCESS_TOKEN;
  const validateRes = await fetch("https://id.twitch.tv/oauth2/validate", {
    headers: { Authorization: `OAuth ${currentToken}` },
  });
  if (validateRes.ok) return currentToken;
  console.log("User token expired, refreshing...");
  return refreshUserToken();
}

// Requires a user access token with moderator:read:followers scope.
// App tokens from client_credentials cannot read follower lists (Twitch changed this in 2023).
async function fetchAllFollowers(broadcasterId, userToken) {
  const followers = [];
  let cursor = null;
  do {
    const url = new URL(`${TWITCH_API_BASE}/channels/followers`);
    url.searchParams.set("broadcaster_id", broadcasterId);
    url.searchParams.set("moderator_id", broadcasterId);
    url.searchParams.set("first", "100");
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url.toString(), {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Twitch API error fetching followers");
    }
    const data = await res.json();
    followers.push(...data.data);
    cursor = data.pagination?.cursor ?? null;
  } while (cursor);
  return followers;
}

async function fetchFollowerCount(token, broadcasterId) {
  const url = new URL(`${TWITCH_API_BASE}/channels/followers`);
  url.searchParams.set("broadcaster_id", broadcasterId);
  url.searchParams.set("first", "1");
  const res = await fetch(url.toString(), {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch follower count");
  return (await res.json()).total ?? 0;
}

// Enrich followers with profile images via /helix/users (max 100 IDs per request)
async function enrichWithAvatars(followers, appToken) {
  const enriched = [...followers];
  for (let i = 0; i < enriched.length; i += 100) {
    const chunk = enriched.slice(i, i + 100);
    const url = new URL(`${TWITCH_API_BASE}/users`);
    chunk.forEach((f) => url.searchParams.append("id", f.user_id));
    const res = await fetch(url.toString(), {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${appToken}`,
      },
    });
    if (!res.ok) continue;
    const data = await res.json();
    const map = Object.fromEntries(
      data.data.map((u) => [u.id, u.profile_image_url]),
    );
    chunk.forEach((f) => {
      f.profile_image_url = map[f.user_id] ?? null;
    });
  }
  return enriched;
}

// ---------- Supabase helpers ----------

function supabaseHeaders() {
  return {
    "Content-Type": "application/json",
    apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
    Prefer: "return=representation",
  };
}

async function getLastSnapshot() {
  const url = new URL(
    `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_snapshots`,
  );
  url.searchParams.set("select", "*");
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", "1");
  const res = await fetch(url.toString(), { headers: supabaseHeaders() });
  if (!res.ok) return null;
  const rows = await res.json();
  return rows[0] ?? null;
}

async function saveSnapshot(followers, totalCount) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_snapshots`;
  const followerMap = {};
  for (const f of followers) {
    followerMap[f.user_id] = {
      user_login: f.user_login,
      user_name: f.user_name,
      profile_image_url: f.profile_image_url ?? null,
    };
  }
  const res = await fetch(url, {
    method: "POST",
    headers: supabaseHeaders(),
    body: JSON.stringify({
      follower_ids: Object.keys(followerMap),
      follower_data: followerMap,
      total_count: totalCount,
    }),
  });
  const text = await res.text();
  if (!res.ok) console.error("Snapshot save failed:", res.status, text);
  else
    console.log("Snapshot saved, ids stored:", Object.keys(followerMap).length);
}

async function appendCountHistory(totalCount) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_count_history`;
  await fetch(url, {
    method: "POST",
    headers: { ...supabaseHeaders(), Prefer: "return=minimal" },
    body: JSON.stringify({ count: totalCount }),
  });
}

async function getCountHistory() {
  const url = new URL(
    `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_count_history`,
  );
  url.searchParams.set("select", "count,created_at");
  url.searchParams.set("order", "created_at.asc");
  url.searchParams.set("limit", "90");
  const res = await fetch(url.toString(), { headers: supabaseHeaders() });
  if (!res.ok) return [];
  return res.json();
}

// ---------- main handler ----------

export const handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  try {
    const broadcasterId = process.env.TWITCH_BROADCASTER_ID;
    if (!broadcasterId) throw new Error("TWITCH_BROADCASTER_ID not set");

    // App token for count + validate; user token for follower list
    const [appToken, userToken] = await Promise.all([
      getAppToken(),
      getUserToken(),
    ]);

    const [currentFollowers, totalCount] = await Promise.all([
      fetchAllFollowers(broadcasterId, userToken),
      fetchFollowerCount(appToken, broadcasterId),
    ]);

    // Enrich with profile avatars via separate /users API call
    const enrichedFollowers = await enrichWithAvatars(
      currentFollowers,
      appToken,
    );

    const currentIds = new Set(enrichedFollowers.map((f) => f.user_id));
    const lastSnapshot = await getLastSnapshot();

    let newFollowers = [];
    let unfollowers = [];

    if (lastSnapshot) {
      const prevIds = new Set(lastSnapshot.follower_ids ?? []);
      const prevData = lastSnapshot.follower_data ?? {};

      newFollowers = enrichedFollowers.filter((f) => !prevIds.has(f.user_id));

      const unfollowerIds = [...prevIds].filter((id) => !currentIds.has(id));
      unfollowers = unfollowerIds.map((id) => ({
        user_id: id,
        user_login: prevData[id]?.user_login ?? id,
        user_name: prevData[id]?.user_name ?? id,
        profile_image_url: prevData[id]?.profile_image_url ?? null,
        unfollowed_detected_at: new Date().toISOString(),
      }));
    }

    // Save snapshot only when follower list has changed or no snapshot exists yet
    const prevIds = new Set(lastSnapshot?.follower_ids ?? []);
    const listChanged =
      !lastSnapshot ||
      currentIds.size !== prevIds.size ||
      [...currentIds].some((id) => !prevIds.has(id)) ||
      [...prevIds].some((id) => !currentIds.has(id));

    if (listChanged) {
      await Promise.all([
        saveSnapshot(enrichedFollowers, totalCount),
        appendCountHistory(totalCount),
      ]);
    }

    const history = await getCountHistory();
    const snapshotAge = lastSnapshot
      ? Math.round(
          (Date.now() - new Date(lastSnapshot.created_at).getTime()) / 60000,
        )
      : null;

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        totalCount,
        followers: enrichedFollowers,
        newFollowers,
        unfollowers,
        history,
        snapshotAge,
      }),
    };
  } catch (err) {
    console.error("twitch fn error:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
