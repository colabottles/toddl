import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { config } from "dotenv"
config()

const BSKY_IDENTIFIER = process.env.BSKY_IDENTIFIER
const BSKY_APP_PASSWORD = process.env.BSKY_APP_PASSWORD
const BSKY_API = "https://bsky.social/xrpc"
const SITE_URL = "https://toddl.dev"

const slug = process.argv.find(a => a.startsWith("--slug="))?.split("=")[1]

if (!slug) {
  console.error("Usage: node post-to-bsky.mjs --slug=your-post-slug")
  process.exit(1)
}

const filePath = path.join("src/content/blog", `${slug}.md`)

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`)
  process.exit(1)
}

const fileContent = fs.readFileSync(filePath, "utf-8")
const { data, content } = matter(fileContent)

if (data.bskyPostId) {
  console.log(`Already has bskyPostId: ${data.bskyPostId} — skipping.`)
  process.exit(0)
}

const postUrl = `${SITE_URL}/blog/${slug}`
const postText = `${data.title}\n\n${postUrl}`

// 1. Authenticate
const authRes = await fetch(`${BSKY_API}/com.atproto.server.createSession`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    identifier: BSKY_IDENTIFIER,
    password: BSKY_APP_PASSWORD,
  }),
})

if (!authRes.ok) {
  console.error("Auth failed:", await authRes.text())
  process.exit(1)
}

const { accessJwt, did } = await authRes.json()
console.log("Authenticated as", did)

// 2. Fetch Open Graph data for the link card
const ogRes = await fetch(`${BSKY_API}/app.bsky.embed.external.resolve`, {
  method: "GET",
  headers: { Authorization: `Bearer ${accessJwt}` },
}).catch(() => null)

// 3. Build the post with a link card embed
const postBody = {
  repo: did,
  collection: "app.bsky.feed.post",
  record: {
    $type: "app.bsky.feed.post",
    text: `${data.title}`,
    createdAt: new Date().toISOString(),
    embed: {
      $type: "app.bsky.embed.external",
      external: {
        uri: postUrl,
        title: data.title,
        description: data.description ?? "",
      },
    },
    facets: [
      {
        index: {
          byteStart: 0,
          byteEnd: new TextEncoder().encode(data.title).length,
        },
        features: [
          {
            $type: "app.bsky.richtext.facet#link",
            uri: postUrl,
          },
        ],
      },
    ],
  },
}

// 4. Post to Bluesky
const postRes = await fetch(`${BSKY_API}/com.atproto.repo.createRecord`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessJwt}`,
  },
  body: JSON.stringify(postBody),
})

if (!postRes.ok) {
  console.error("Post failed:", await postRes.text())
  process.exit(1)
}

const postData = await postRes.json()
const bskyPostId = postData.uri.split("/").pop()

console.log(`Posted to Bluesky! Post ID: ${bskyPostId}`)
console.log(`Post URL: https://bsky.app/profile/${BSKY_IDENTIFIER}/post/${bskyPostId}`)

// 5. Write bskyPostId back to frontmatter
data.bskyPostId = bskyPostId
const updated = matter.stringify(content, data)
fs.writeFileSync(filePath, updated, "utf-8")

console.log(`Updated frontmatter in ${filePath}`)
console.log(`Done! Now run: git add ${filePath} && git commit -m "chore: add bskyPostId to ${slug}" && git push`)
