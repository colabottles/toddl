// netlify/functions/twitch.js
// Securely proxies Twitch Helix API requests.
// Set these env vars in Netlify dashboard → Site config → Environment variables:
//   TWITCH_CLIENT_ID
//   TWITCH_CLIENT_SECRET
//   TWITCH_BROADCASTER_ID   (your numeric Twitch user ID)
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY

const TWITCH_TOKEN_URL = "https://id.twitch.tv/oauth2/token";
const TWITCH_API_BASE = "https://api.twitch.tv/helix";

// ---------- helpers ----------

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
  if (!res.ok) throw new Error("Failed to get Twitch token");
  const data = await res.json();
  return data.access_token;
}

async function fetchAllFollowers(token, broadcasterId) {
  const followers = [];
  let cursor = null;

  do {
    const url = new URL(`${TWITCH_API_BASE}/channels/followers`);
    url.searchParams.set("broadcaster_id", broadcasterId);
    url.searchParams.set("first", "100");
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url.toString(), {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Twitch API error");
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
  const data = await res.json();
  return data.total ?? 0;
}

// ---------- Supabase helpers (REST API, no SDK needed) ----------

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

async function saveSnapshot(followerIds, totalCount) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_snapshots`;
  const res = await fetch(url, {
    method: "POST",
    headers: supabaseHeaders(),
    body: JSON.stringify({
      follower_ids: followerIds,
      total_count: totalCount,
    }),
  });
  if (!res.ok) console.error("Snapshot save failed", await res.text());
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

    // Fetch current followers and count in parallel
    const [currentFollowers, totalCount] = await Promise.all([
      fetchAllFollowers(token, broadcasterId),
      fetchFollowerCount(token, broadcasterId),
    ]);

    // Build a set of current follower IDs
    const currentIds = new Set(currentFollowers.map((f) => f.user_id));

    // Pull previous snapshot to diff unfollowers
    const lastSnapshot = await getLastSnapshot();
    let unfollowers = [];
    let newFollowers = [];

    if (lastSnapshot) {
      const prevIds = new Set(lastSnapshot.follower_ids);

      // New followers = in current but not in prev snapshot
      newFollowers = currentFollowers.filter((f) => !prevIds.has(f.user_id));

      // Unfollowers = in prev snapshot but not in current
      const unfollowerIds = [...prevIds].filter((id) => !currentIds.has(id));
      // We only have IDs for unfollowers — enrich with Twitch user lookup
      if (unfollowerIds.length > 0) {
        // Twitch /users accepts up to 100 IDs per request
        const chunks = [];
        for (let i = 0; i < unfollowerIds.length; i += 100) {
          chunks.push(unfollowerIds.slice(i, i + 100));
        }
        for (const chunk of chunks) {
          const uurl = new URL(`${TWITCH_API_BASE}/users`);
          chunk.forEach((id) => uurl.searchParams.append("id", id));
          const ures = await fetch(uurl.toString(), {
            headers: {
              "Client-ID": process.env.TWITCH_CLIENT_ID,
              Authorization: `Bearer ${token}`,
            },
          });
          if (ures.ok) {
            const udata = await ures.json();
            unfollowers.push(
              ...udata.data.map((u) => ({
                user_id: u.id,
                user_login: u.login,
                user_name: u.display_name,
                profile_image_url: u.profile_image_url,
                unfollowed_detected_at: new Date().toISOString(),
              })),
            );
          }
        }
      }
    }

    // Save new snapshot + count history (fire and forget errors)
    await Promise.all([
      saveSnapshot([...currentIds], totalCount),
      appendCountHistory(totalCount),
    ]);

    const history = await getCountHistory();

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        totalCount,
        followers: currentFollowers,
        newFollowers,
        unfollowers,
        history,
        snapshotAge: lastSnapshot
          ? Math.round(
              (Date.now() - new Date(lastSnapshot.created_at).getTime()) /
                60000,
            )
          : null,
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
