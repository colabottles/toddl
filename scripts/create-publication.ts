import { BskyAgent } from '@atproto/api'
import { config } from 'dotenv'
config()

const agent = new BskyAgent({ service: 'https://bsky.social' })

console.log('identifier:', process.env.BSKY_IDENTIFIER)
console.log('password:', process.env.BSKY_APP_PASSWORD ? 'set' : 'undefined')

await agent.login({
  identifier: process.env.BSKY_IDENTIFIER!,
  password: process.env.BSKY_APP_PASSWORD!,
})

const result = await agent.api.com.atproto.repo.createRecord({
  repo: agent.session!.did,
  collection: 'site.standard.publication',
  record: {
    $type: 'site.standard.publication',
    url: 'https://toddl.dev',
    name: 'Todd Libby',
    description: 'Former web developer and accessibility advocate. Desert nomad currently.',
    preferences: {
      showInDiscover: true,
    },
  },
})

// Save this — you'll need it for Step 3
console.log('Publication AT-URI:', result.data.uri)