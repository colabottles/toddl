# toddl.dev — portfolio

Personal portfolio site for Todd Libby. Built with Astro, deployed to Netlify.

## Stack

- **Astro 6** — static site generator
- **Vue 3** — available for interactive islands where needed
- **Vanilla CSS** — custom properties, no utility frameworks
- **TypeScript** — always
- **Netlify** — deployment + CDN

## Design tokens

All tokens live in `src/styles/global.css`:

```css
--accent:         #a3af7c   /* olive green — single accent */
--dark:           #252C37   /* sidebar + headings */
--warm:           #f8f7f4   /* page background */
--warm-mid:       #eeece8   /* card surfaces */
```

## Setup

```bash
npm install
npm run dev       # localhost:4321
npm run build     # dist/
npm run preview   # preview build locally
```

## Project structure

```plaintext
src/
  content/
    blog/             # markdown blog posts (74 posts)
  content.config.ts   # content collection schema
  data/
    content.ts        # all projects, writing, talks, uses — edit here
  layouts/
    Base.astro        # sidebar, skip link, hamburger, font loading
  components/
    Nav.astro         # navigation with aria-current
  pages/
    index.astro       # splash page
    about.astro       # /about
    projects.astro    # /projects
    writing.astro     # /writing
    speaking.astro    # /speaking
    uses.astro        # /uses
    contact.astro     # /contact
    blog/
      index.astro     # /blog
      [slug].astro    # /blog/[slug]
    elsewhere.astro   # /elsewhere
    podcast.astro     # /podcast
    colophon.astro    # /colophon
    accessibility.astro # /accessibility
    privacy.astro     # /privacy
    404.astro         # 404
  styles/
    global.css        # design tokens + layout
    toddl-dark.json   # custom Shiki syntax highlighting theme
public/
  favicon.svg
  portland.jpg
  phoenix.jpg
```

## Adding content

All content is driven from `src/data/content.ts`. Add a new project:

```ts
{
  name: 'MyProject',
  description: 'What it does.',
  stack: ['Nuxt 4', 'Supabase'],
  url: 'https://myproject.netlify.app',
  status: 'active',   // optional: 'active' | 'live' | 'streaming'
  featured: true,     // optional: olive border accent
  wide: true,         // optional: full-width card
}
```

## Blog posts

Blog posts live in `src/content/blog/` as Markdown files. Frontmatter fields:

```yaml
title: string
description: string (optional)
date: YYYY-MM-DD
tags:
  - tag
draft: boolean (optional, defaults to false)
```

## Accessibility

- Skip link on every page
- `aria-current="page"` on active nav link
- Semantic landmarks: `<aside>`, `<nav>`, `<main>`
- `aria-label` on all landmark regions
- `prefers-reduced-motion` respected globally
- WCAG 2.2 AA contrast throughout
- All SVG icons have accessible names or are `aria-hidden`

## Notes

- Avoid CSS class names containing `sponsor`, `ad`, `banner`, `track`, `analytics`, `social`, or `share` — these are blocked by ad blockers
- Node 22 required

## Deployment

Push to GitHub, connect repo to Netlify. Netlify auto-deploys from main branch. `output: 'static'` — fully static, no serverless functions needed.
