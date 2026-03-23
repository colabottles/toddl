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

// fetchAllFollowers uses a USER access token with moderator:read:followers scope.
// App tokens from client_credentials cannot read follower lists (Twitch changed this in 2023).
async function fetchAllFollowers(broadcasterId) {
  const followers = [];
  let cursor = null;
  const userToken = process.env.TWITCH_USER_ACCESS_TOKEN;
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
    console.log(
      "Snapshot saved OK, ids stored:",
      Object.keys(followerMap).length,
    );
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

    const token = await getAppToken();

    const [currentFollowers, totalCount] = await Promise.all([
      fetchAllFollowers(broadcasterId),
      fetchFollowerCount(token, broadcasterId),
    ]);

    const currentIds = new Set(currentFollowers.map((f) => f.user_id));

    const lastSnapshot = await getLastSnapshot();

    let newFollowers = [];
    let unfollowers = [];

    if (lastSnapshot) {
      const prevIds = new Set(lastSnapshot.follower_ids ?? []);
      const prevData = lastSnapshot.follower_data ?? {};

      // New followers = in current but not in previous snapshot
      newFollowers = currentFollowers.filter((f) => !prevIds.has(f.user_id));

      // Unfollowers = in previous snapshot but not in current
      const unfollowerIds = [...prevIds].filter((id) => !currentIds.has(id));
      unfollowers = unfollowerIds.map((id) => ({
        user_id: id,
        user_login: prevData[id]?.user_login ?? id,
        user_name: prevData[id]?.user_name ?? id,
        profile_image_url: prevData[id]?.profile_image_url ?? null,
        unfollowed_detected_at: new Date().toISOString(),
      }));
    }

    // Save snapshot when the list has actually changed or no snapshot exists yet
    const prevIds = new Set(lastSnapshot?.follower_ids ?? []);
    const listChanged =
      !lastSnapshot ||
      currentIds.size !== prevIds.size ||
      [...currentIds].some((id) => !prevIds.has(id)) ||
      [...prevIds].some((id) => !currentIds.has(id));

    if (listChanged) {
      await Promise.all([
        saveSnapshot(currentFollowers, totalCount),
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
        followers: currentFollowers,
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
