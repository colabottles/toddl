# Publishing a Blog Post on toddl.dev

## What happens when you publish

Running the post script handles everything in one shot:

- Authenticates with Bluesky
- Posts with title, description, and link card
- Registers the post as a Standard.site document on AT Protocol
- Writes `bskyPostId` and `standardSiteUri` back into the post's frontmatter

---

## Step 1 — Create the file

Create a new `.md` file in `src/content/blog/` named with the post slug:

```bash
src/content/blog/your-post-slug.md
```

---

## Step 2 — Add frontmatter

```yaml
---
title: Your Post Title
description: A one sentence description of the post.
date: 2026-05-02
tags:
  - post
  - your-tag
bskyPostId: ""
draft: false
---
```

**Notes:**

- Keep the `post` tag — it is required
- `image` is optional but shows in Bluesky link cards; omit it to use the default social card
- Leave `bskyPostId` as `""` — the script fills it in
- Do not add `standardSiteUri` — the script fills that in too
- Set `draft: true` to preview without publishing

---

## Step 3 — Write the post

Write your content in Markdown below the frontmatter.

```markdown
## Your First Heading

Your content here.
```

---

## Step 4 — Preview locally

```bash
npm run dev
```

Visit `http://localhost:4321/blog/your-post-slug` to preview.

---

## Step 5 — Commit and push

```bash
git add .
git commit -m "post: your post title"
git push origin main
```

Netlify will build and deploy automatically. Takes about 30–60 seconds.

---

## Step 6 — Post to Bluesky and register with Standard.site

Once the post is live at `toddl.dev/blog/your-post-slug`, run:

```bash
npm run post-to-bsky -- --slug=your-post-slug
```

This will:

- Post to Bluesky with title, description, and link card
- Register the post as a Standard.site document on AT Protocol
- Write `bskyPostId` and `standardSiteUri` into the frontmatter automatically

---

## Step 7 — Commit the updated frontmatter

```bash
git add src/content/blog/your-post-slug.md
git commit -m "chore: add bskyPostId and standardSiteUri to your-post-slug"
git push origin main
```

This enables the Bluesky likes count at the bottom of the post and confirms the Standard.site document record in the page `<head>`.

---

## Quick reference

| Step | Command |
| ------ | --------- |
| Preview | `npm run dev` |
| Build check | `npm run build` |
| Push live | `git add . && git commit -m "post: title" && git push origin main` |
| Post to Bluesky + Standard.site | `npm run post-to-bsky -- --slug=your-slug` |
| Update frontmatter | `git add src/content/blog/your-slug.md && git commit -m "chore: add bskyPostId and standardSiteUri to your-slug" && git push origin main` |

---

## Validate (optional)

After deploying, confirm the post is fully registered on the AT Protocol network:

1. Go to [site-validator.fly.dev](https://site-validator.fly.dev)
2. Enter the full post URL: `https://toddl.dev/blog/your-post-slug`
3. All 17 checks should pass
