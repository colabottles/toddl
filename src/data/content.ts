export type ProjectStatus = 'active' | 'live' | 'retired' | 'streaming' | 'in progress' | undefined

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
    name: 'BranchFlow',
    description: 'Keyboard-accessible Git history explorer with SVG commit graph, ARIA live regions, and light, dark, and high-contrast modes.',
    stack: ['Nuxt 4', 'TypeScript', 'GitHub API', 'SVG', 'Vanilla CSS', 'Netlify'],
    status: 'live',
    url: 'https://branchflow.netlify.app',
    featured: true,
  },
  {
    name: 'BasketBuddy',
    description: 'Grocery budgeting PWA with Stripe subscriptions, category management, and mobile-first UI.',
    stack: ['Nuxt 4', 'Supabase', 'Stripe', 'PWA', 'pnpm'],
    url: 'https://basketbuddyapp.netlify.app',
    status: 'retired',
  },
  {
    name: 'Broadcast',
    description: 'Multi-platform social posting — Bluesky, Mastodon, and LinkedIn from one place.',
    stack: ['Nuxt 4', 'Supabase', 'OAuth', 'Bluesky API'],
    repo: 'https://github.com/colabottles/broadcast',
    status: 'retired',
  },
  {
    name: 'Blurcle',
    description: 'Bluesky analytics — engagement metrics, activity charts, and repost filtering.',
    stack: ['Nuxt 4', 'Bluesky API', 'npm'],
    status: 'retired',
  },
  {
    name: 'RouteReady',
    description: 'Route management SaaS for tracking drivers, vehicles, and properties.',
    stack: ['Nuxt 4', 'PostgreSQL', 'Better Auth', 'Netlify'],
    status: 'in progress',
    wide: true,
  },
  {
    name: 'Chirp',
    description: 'Twitter-style social platform with full auth, follow system, RLS, and accessibility preferences.',
    stack: ['Nuxt 4', 'OAuth', 'RLS', 'TypeScript'],
    status: 'retired',
  },
  {
    name: 'ddo-overlay',
    description: 'OBS browser source overlay pulling live character data from the DDO Audit API via URL query params.',
    stack: ['TypeScript', 'DDO Audit API', 'Netlify'],
    status: 'live',
    url: 'https://ddooverlay.netlify.app',
  },
  {
    name: 'ZulkirBot',
    description: 'Fully featured Twitch chat RPG bot with two bot accounts, combat system, spellbook, rogue skills, and D&D mechanics built around Dungeons & Dragons Online.',
    stack: ['Node', 'TypeScript', 'PostgreSQL', 'tmi.js'],
    status: 'live',
    wide: true,
  },
]

export const writing: WriteItem[] = [
  {
    year: '2026',
    title: 'The Web Accessibility Handbook',
    tag: 'book',
  },
  {
    year: '2026',
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
      { name: 'IntelliJIDEA', note: 'primary' },
      { name: 'Vim', note: 'quick edits' },
    ],
  },
  {
    category: 'terminal',
    items: [
      { name: 'Yaw' },
      { name: 'zsh + oh-my-zsh' },
    ],
  },
  {
    category: 'stack',
    items: [
      { name: 'Nuxt 4', note: 'all projects' },
      { name: 'PostgreSQL', note: 'all your database belongs to us' },
      { name: 'Netlify', note: 'deployment' },
      { name: 'TypeScript', note: 'always' },
    ],
  },
]
