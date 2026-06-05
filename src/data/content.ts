export type ProjectStatus = 'active' | 'live' | 'RIP' | 'streaming' | undefined

export interface Project {
  name: string
  description: string
  stack: string[]
  url?: string
  repo?: string
  status?: ProjectStatus
  featured?: boolean
  wide?: boolean
}

export interface WriteItem {
  year: string
  title: string
  tag: 'book' | 'blog' | 'article'
  url?: string
}

export interface TalkItem {
  year: string
  event: string
  title: string
  url?: string
}

export interface UsesItem {
  category: string
  items: { name: string; note?: string }[]
}

export const projects: Project[] = [
  {
    name: 'BasketBuddy',
    description: 'Grocery budgeting PWA with Stripe subscriptions, category management, and mobile-first UI.',
    stack: ['Nuxt 4', 'Supabase', 'Stripe', 'PWA', 'pnpm'],
    url: 'https://basketbuddyapp.netlify.app',
    status: 'active',
    featured: true,
  },
  {
    name: 'Broadcast',
    description: 'Multi-platform social posting — Bluesky, Mastodon, and LinkedIn from one place.',
    stack: ['Nuxt 4', 'Supabase', 'OAuth', 'Bluesky API'],
    status: 'RIP',
  },
  {
    name: 'RouteReady',
    description: 'Route management SaaS for tracking drivers, vehicles, and properties.',
    stack: ['Nuxt 4', 'Supabase', 'PostgreSQL', 'Better Auth', 'Netlify'],
  },
  {
    name: 'Blurcle',
    description: 'Bluesky analytics — engagement metrics, activity charts, and repost filtering.',
    stack: ['Nuxt 4', 'Bluesky API', 'npm'],
    url: 'https://blurcle.netlify.app',
    status: 'live',
    repo: 'https://github.com/colabottles/blurcle',
  },
  {
    name: 'Chirp',
    description: 'Twitter-style social platform with full auth, follow system, RLS, and accessibility preferences.',
    stack: ['Nuxt 4', 'Supabase', 'RLS', 'TypeScript'],
  },
  {
    name: 'Beacon',
    description: 'Ethical newsletter platform with a 95/5 revenue split. Auth, publications, posts, and subscriptions.',
    stack: ['Nuxt 4', 'Supabase', 'Stripe'],
  },
  {
    name: 'ZulkirBot',
    description: 'Fully featured Twitch chat RPG bot with two bot accounts, combat system, spellbook, rogue skills, and D&D mechanics built around Dungeons & Dragons Online.',
    stack: ['Node', 'TypeScript', 'Supabase', 'tmi.js', 'DDO'],
    status: 'streaming',
    wide: true,
  },
  {
    name: 'ddo-overlay',
    description: 'OBS browser source overlay pulling live character data from the DDO Audit API via URL query params.',
    stack: ['TypeScript', 'DDO Audit API', 'Netlify'],
    url: 'https://ddooverlay.netlify.app',
  },
]

export const writing: WriteItem[] = [
  {
    year: 'ongoing',
    title: 'The Web Accessibility Handbook',
    tag: 'book',
  },
  {
    year: 'ongoing',
    title: 'Why hiring in tech is broken',
    tag: 'book',
  },
  {
    year: 'ongoing',
    title: 'WCAG 2.2 in practice — a developer\'s perspective',
    tag: 'blog',
    url: 'https://toddl.dev/posts/',
  },
]

export const uses: UsesItem[] = [
  {
    category: 'editor',
    items: [
      { name: 'VS Code', note: 'primary' },
      { name: 'Vim', note: 'quick edits' },
    ],
  },
  {
    category: 'terminal',
    items: [
      { name: 'Ghostty' },
      { name: 'zsh + oh-my-zsh' },
    ],
  },
  {
    category: 'stack',
    items: [
      { name: 'Nuxt 4', note: 'all projects' },
      { name: 'Supabase', note: 'auth + db' },
      { name: 'Netlify', note: 'deployment' },
      { name: 'TypeScript', note: 'always' },
    ],
  },
  {
    category: 'tools',
    items: [
      { name: 'Axe DevTools, ARC Toolkit, IBM Equal Access Checker', note: 'a11y is a right' },
      { name: 'NVDA + VoiceOver', note: 'screen reader testing' },
      { name: 'Affinity Photo, CodePen', note: 'technodesign' },
    ],
  },
  {
    category: 'hardware',
    items: [
      { name: 'MacBook Pro 2019', note: 'still tickin' },
      { name: 'PC', note: 'because it is my primary machine' },
    ],
  },
]
