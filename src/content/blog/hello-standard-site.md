---
title: Hello Standard.site
description: Wiring up Standard.site on my blog.
date: 2026-06-07T00:00:00.000Z
tags:
  - post
  - bluesky
  - atproto
  - standard.site
image: >-
  https://res.cloudinary.com/colabottles/image/upload/v1780889320/todd-social-card-standard.png
bskyPostId: 3mnqqtepjsx24
draft: false
standardSiteUri: 'at://did:plc:gevyqibw5p2xsonkbsbjm5vy/site.standard.document/3mnqqtfgzrh24'
---

## I Sat Down to Try My Hand at Standard.site

In a little less than two hours or reading and poking around, writing the code, I decided to just do it and see what it does.

## What is Standard.site?

If you use Bluesky, you already know the AT Protocol. It's the open protocol powering the network.

[Standard.site](https://standard.site/) is a set of lexicons built on top of it that let your website register itself as a publication on the protocol. Think of it as RSS for the ATmosphere. People can follow your domain the same way they follow an account on Bluesky, and your posts show up in aggregators like Read on pckt and Docs.surf.

The appeal for me was that I already had Bluesky auto-posting wired up. This just takes it further. My content lives on my domain, and the AT Protocol knows about it.

## What the Implementation Looks Like

There are three parts:

- A publication record. A one-time script that registers toddl.dev as a publication on your PDS. You get back an AT-URI that identifies your site on the network.
- A .well-known endpoint. A single file at /.well-known/site.standard.publication that returns your publication AT-URI as plain text. This is how the network verifies you actually own the domain.
- Document records. One record per post, each linked back to the publication. Each post page gets a `<link rel="site.standard.document">` tag in the `<head>` pointing to its record.

## Fitting it Into the Existing Workflow

I already had a post-to-bsky script that posts to Bluesky and writes the post ID back into the frontmatter. Adding Standard.site was just a few more lines at the end of that same script. Authenticate, create the document record, write the AT-URI back into frontmatter alongside the Bluesky post ID.

Now the publish flow is exactly what it was before: `npm run post-to-bsky -- --slug=your-post-slug`

One command. Bluesky post goes out, Standard.site document gets registered, both IDs land in the frontmatter. Then commit and push.

## Backfilling Existing Posts

Since I had 74 posts already live, I wrote a backfill script that looped through every markdown file, registered each one as a document record, and wrote the AT-URI back into the frontmatter automatically. Skipped drafts and anything already registered so it was safe to re-run if something failed partway through.

## Is it Worth Doing?

If you're already on Bluesky and you own your content on your own domain, yes. It takes maybe an hour to implement and your entire back catalog becomes discoverable on the open web in a new way without handing your content to any platform. I like to own my own content, and with how things are today, I am taking my content and keeping it close to me.
