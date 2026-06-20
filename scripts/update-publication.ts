// scripts/update-publication.ts
import { BskyAgent } from '@atproto/api'
import { config } from 'dotenv'
config()

const agent = new BskyAgent({ service: 'https://bsky.social' })

await agent.login({
  identifier: process.env.BSKY_IDENTIFIER!,
  password: process.env.BSKY_APP_PASSWORD!,
})

await agent.api.com.atproto.repo.putRecord({
  repo: agent.session!.did,
  collection: 'site.standard.publication',
  rkey: '3mnqgth7gxo2f',
  record: {
    $type: 'site.standard.publication',
    url: 'https://toddl.dev',
    name: 'Todd Libby',
    description: 'Former web developer and accessibility advocate. Desert nomad currently.',
    preferences: {
      showInDiscover: true,
    },
    basicTheme: {
      $type: 'site.standard.theme.basic',
      background: {
        $type: 'site.standard.theme.color#rgb',
        r: 248, g: 247, b: 244,  // #f8f7f4 warm background
      },
      foreground: {
        $type: 'site.standard.theme.color#rgb',
        r: 37, g: 44, b: 55,     // #252C37
      },
      accent: {
        $type: 'site.standard.theme.color#rgb',
        r: 125, g: 57, b: 235,   // #7D39EB violet
      },
      accentForeground: {
        $type: 'site.standard.theme.color#rgb',
        r: 255, g: 255, b: 255,  // white text on purple button
      },
    },
  },
})

console.log('Publication updated.')