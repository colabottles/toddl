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
  if (!res.ok) throw new Error("Failed to get Twitch token");
  return (await res.json()).access_token;
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

// Save snapshot storing full follower objects (id + login + name + avatar)
// so unfollowers can be identified later without a Twitch API lookup.
async function saveSnapshot(followers, totalCount) {
  const url = `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_snapshots`;
  // Store minimal follower data keyed by user_id
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
      // Keep follower_ids array for fast set operations
      follower_ids: Object.keys(followerMap),
      // Store full map so we can reconstruct unfollower details
      follower_data: followerMap,
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

  // Temporary debug endpoint — remove after diagnosing
  // Visit: /.netlify/functions/twitch?debug=1
  // VERSION CHECK — remove after confirming deploy
  if (event.queryStringParameters?.version === "1") {
    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ version: "v3-jsonb", saveSnapshot: saveSnapshot.toString().slice(0, 200) }) };

    try {
      const snapshot = await getLastSnapshot();
      const allSnapshots = await (async () => {
        const url = new URL(
          `${process.env.SUPABASE_URL}/rest/v1/twitch_follower_snapshots`,
        );
        url.searchParams.set(
          "select",
          "id,total_count,created_at,follower_ids",
        );
        url.searchParams.set("order", "created_at.desc");
        url.searchParams.set("limit", "5");
        const res = await fetch(url.toString(), { headers: supabaseHeaders() });
        if (!res.ok) return [];
        const rows = await res.json();
        // Don't return full follower_ids arrays — just counts
        return rows.map((r) => ({
          id: r.id,
          total_count: r.total_count,
          stored_ids_count: (r.follower_ids ?? []).length,
          has_follower_data: !!r.follower_data,
          created_at: r.created_at,
        }));
      })();
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(
          {
            snapshot_used: snapshot
              ? {
                  id: snapshot.id,
                  total_count: snapshot.total_count,
                  stored_ids_count: (snapshot.follower_ids ?? []).length,
                  has_follower_data: !!snapshot.follower_data,
                  follower_data_sample: Object.entries(
                    snapshot.follower_data ?? {},
                  ).slice(0, 3),
                  created_at: snapshot.created_at,
                }
              : null,
            all_recent_snapshots: allSnapshots,
          },
          null,
          2,
        ),
      };
    } catch (err) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: err.message }),
      };
    }
  }

  try {
    const broadcasterId = process.env.TWITCH_BROADCASTER_ID;
    if (!broadcasterId) throw new Error("TWITCH_BROADCASTER_ID not set");

    const token = await getAppToken();

    const [currentFollowers, totalCount] = await Promise.all([
      fetchAllFollowers(token, broadcasterId),
      fetchFollowerCount(token, broadcasterId),
    ]);

    const currentIds = new Set(currentFollowers.map((f) => f.user_id));

    // Build a lookup map of current followers for fast access
    const currentMap = {};
    for (const f of currentFollowers) {
      currentMap[f.user_id] = f;
    }

    // Get the last saved snapshot
    const lastSnapshot = await getLastSnapshot();

    let newFollowers = [];
    let unfollowers = [];

    const prevIds = new Set(lastSnapshot?.follower_ids ?? []);

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
