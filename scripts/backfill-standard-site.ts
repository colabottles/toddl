import { BskyAgent } from '@atproto/api'
import { config } from 'dotenv'
import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

config()

const POSTS_DIR = './src/content/blog'
const PUBLICATION_AT_URI = process.env.STANDARD_SITE_PUBLICATION_URI!

const agent = new BskyAgent({ service: 'https://bsky.social' })

await agent.login({
  identifier: process.env.BSKY_IDENTIFIER!,
  password: process.env.BSKY_APP_PASSWORD!,
})

const files = await readdir(POSTS_DIR)
const mdFiles = files.filter(f => f.endsWith('.md'))

for (const file of mdFiles) {
  const filePath = join(POSTS_DIR, file)
  const raw = await readFile(filePath, 'utf-8')
  const { data, content } = matter(raw)

  // skip drafts and posts already registered
  if (data.draft || data.standardSiteUri) {
    console.log(`skipping: ${file}`)
    continue
  }

  // derive the path from the filename
  const slug = file.replace(/\.md$/, '')
  const path = `/blog/${slug}`

  try {
    const result = await agent.api.com.atproto.repo.createRecord({
      repo: agent.session!.did,
      collection: 'site.standard.document',
      record: {
        $type: 'site.standard.document',
        site: PUBLICATION_AT_URI,
        title: data.title,
        path,
        description: data.description ?? '',
        publishedAt: new Date(data.date).toISOString(),
        tags: data.tags ?? [],
        // strip markdown for plain text
        textContent: content.replace(/[#*`>\-\[\]!]/g, '').trim(),
      },
    })

    // write the AT-URI back into the frontmatter
    data.standardSiteUri = result.data.uri
    const updated = matter.stringify(content, data)
    await writeFile(filePath, updated, 'utf-8')

    console.log(`registered: ${file} → ${result.data.uri}`)

    // be polite to the API
    await new Promise(r => setTimeout(r, 500))
  } catch (err) {
    console.error(`failed: ${file}`, err)
  }
}

console.log('done')