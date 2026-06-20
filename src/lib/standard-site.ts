import { BskyAgent } from '@atproto/api'

const PUBLICATION_AT_URI = process.env.STANDARD_SITE_PUBLICATION_URI!

export async function registerDocument(post: {
  title: string
  path: string
  description: string
  publishedAt: Date
  tags: string[]
  textContent: string
}) {
  const agent = new BskyAgent({ service: 'https://bsky.social' })

  await agent.login({
    identifier: process.env.BSKY_IDENTIFIER!,
    password: process.env.BSKY_APP_PASSWORD!,
  })

  const result = await agent.api.com.atproto.repo.createRecord({
    repo: agent.session!.did,
    collection: 'site.standard.document',
    record: {
      $type: 'site.standard.document',
      site: PUBLICATION_AT_URI,
      title: post.title,
      path: post.path,
      description: post.description,
      publishedAt: post.publishedAt.toISOString(),
      tags: post.tags,
      textContent: post.textContent,
    },
  })

  // the AT-URI to store in the post's frontmatter
  return result.data.uri
}