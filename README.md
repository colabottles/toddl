# toddl.dev — portfolio

Personal portfolio site for Todd Libby. Built with Astro, deployed to Netlify.

## Stack

- **Astro** — static site generator
- **Vue 3** — available for interactive islands where needed
- **Vanilla CSS** — custom properties, no utility frameworks
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

```
src/
  data/
    content.ts        # all projects, writing, talks, uses — edit here
  layouts/
    Base.astro        # sidebar, skip link, hamburger, font loading
  components/
    Nav.astro         # navigation with aria-current
  pages/
    index.astro       # /about
    projects.astro    # /projects
    writing.astro     # /writing
    speaking.astro    # /speaking
    uses.astro        # /uses
    contact.astro     # /contact
    404.astro         # 404
  styles/
    global.css        # design tokens + layout
public/
  favicon.svg
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

## Accessibility

- Skip link on every page
- `aria-current="page"` on active nav link
- Semantic landmarks: `<aside>`, `<nav>`, `<main>`
- `aria-label` on all landmark regions
- Screen-reader-only `<h1>` on every page
- `prefers-reduced-motion` respected globally
- WCAG 2.2 AA contrast throughout

## Deployment

Push to GitHub, connect repo to Netlify. `netlify.toml` handles build config.
Netlify adapter is set but `output: 'static'` — fully static, no serverless functions needed.
