---
title: Building a Production-Ready Nuxt Module From Idea to Published
description: How I built @colabottles/center-div - a complete journey from problem to published package.
date: 2026-01-17 ## YYYY-MM-DD
tags:
  - post ## LEAVE THIS TAG HERE
  - nuxt
  - vue
  - coding
layout: layouts/post.njk
image: https://res.cloudinary.com/colabottles/image/upload/v1731376889/todd-social-card-nuxtmod.png
bskyPostId: 3mcn4sxc6bk27
---

## How I built @colabottles/center-div - a complete journey from problem to published package

### The Impetus

My background allows me to pick up on programming pretty good these days, that said, I don't have an eidetic memory, I have a 40-plus year trove of what I call "space junk" floating around in my head, real life things to think about, but I understand the fundamentals and can understand and process by doing and reading. I figured this project is a great little thing to do. So I did it.

### The Post I Saw

I was on my usual jaunt through Bluesky seeing if there was anything positive or interesting to read and laid eyes [on this comment](https://bsky.app/profile/stephfh.dev/post/3mbmrbat4os2u) and the reply to it by [Daniel Roe](https://roe.dev), lead maintainer with the Nuxt core team. I thought to myself, _"This looks like a funny thing I can do, here is something I can challenge myself with."_ and thus I started doing the research.

### The ~~Problem~~ Issue That Started It All

If you've built anything with Nuxt (or anything with anything really), you've probably written this code (or something similar) dozens of times:

```html
<div style="display: grid; place-items: center; min-height: 25vh">
  <button>Perfectly Centered</button>
</div>
```

or a version of this in your preferred programming language.

It's such a common pattern—centering content on a page—yet we repeat the same CSS (Cascading Style Sheets) Grid boilerplate over and over. Worse, when you try to abstract it into a component, you often run into **hydration mismatches** that make your console light up with warnings.

I decided to try and solve this once and for all by building `@colabottles/center-div`, a simple Nuxt module for accessible, hydration-safe centering. Here's what I learned building and publishing a production-ready Nuxt module.

---

## The Journey: From Idea to npm

### Day 1: The Hydration Nightmare

My first attempt was straightforward—create a Vue component that applies centering styles:

```html
<script setup>
const props = defineProps({
  minHeight: String
})
</script>

<template>
  <div
    :style="{
      display: 'grid',
      placeItems: 'center',
      minHeight: minHeight
    }"
  >
    <slot />
  </div>
</template>
```

Simple, right? **Wrong. Hydration errors everywhere.**

The problem: Vue was applying styles differently on the server versus the client, causing the dreaded:

```bash
Hydration completed but contains mismatches.
```

### The Solution: Timing is Everything

After researching (and a lot of trial and error), I discovered the issue was about **when** styles get applied. The fix involved two key changes:

**1. Use `computed` styles instead of reactive object spreads:**

```typescript
<script setup lang="ts">
import { computed } from 'vue'

const computedStyle = computed(() => {
  const baseStyle: Record<string, string> = { display: 'grid' }

  switch (props.axis) {
    case 'horizontal':
      baseStyle.justifyItems = 'center'
      break
    case 'vertical':
      baseStyle.alignItems = 'center'
      break
    default:
      baseStyle.placeItems = 'center'
  }

  if (props.minBlockSize) {
    baseStyle.minBlockSize = props.minBlockSize
  }

  return baseStyle
})
</script>

<template>
  <component :is="as" :style="computedStyle">
    <slot />
  </component>
</template>
```

**2. For the directive, use `beforeMount` instead of `mounted`:**

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('center', {
    beforeMount(el: HTMLElement) {
      el.style.display = 'grid'
      el.style.placeItems = 'center'
      el.style.height = '100dvh'
      el.style.width = '100%'
    }
  })
})
```

**Result:** Zero hydration warnings. The component rendered identically on server and client.

---

## Making It Accessible: WCAG (Web Content Accessibility Guidelines) 2.2 Compliance

Centering seems simple, but accessibility matters. I wanted this module to be usable by everyone, including users with disabilities. Here's what I focused on:

### 1. Preserving DOM (Document Object Model) Order

Many centering techniques use absolute positioning or flexbox in ways that change visual order without changing DOM order. This breaks screen readers.

**My approach:** Pure CSS Grid with `place-items: center`. No position manipulation, no reordering.

```css
.nuxt-center-div {
  display: grid;
  place-items: center;
}
```

### 2. Usage of Logical Properties

Instead of `min-height`, I used `min-block-size` to respect writing modes and text direction:

```html
<CenterDiv min-block-size="25vh">
  Content
</CenterDiv>
```

This works correctly for RTL (Right-to-Left) languages and vertical writing modes.

### 3. Never Manipulate ARIA (Accessible Rich Internet Applications)

The component doesn't add any ARIA  attributes, change roles, or trap focus. It's purely presentational—exactly what a layout utility should be. The less the ARIA, the better I say.

### 4. Support Semantic HTML (HyperText Markup Language)

The `as` prop lets users choose the correct semantic element:

```html
<!-- Default: <section> -->
<CenterDiv>Content</CenterDiv>

<!-- Use <main> for main content -->
<CenterDiv as="main">Content</CenterDiv>

<!-- Use <article> for articles -->
<CenterDiv as="article">Content</CenterDiv>
```

Let's face it, semantic HTML is an art form and one we don't see too often these days that are all about "build fast and break things". That is complete malarkey by the way. I'll explain more in a future blog post.

**Standards met:**

- ✅ WCAG 1.3.2 - Meaningful Sequence
- ✅ WCAG 1.4.10 - Reflow (supports 400% zoom)
- ✅ WCAG 2.4.3 - Focus Order

---

## Testing: The Foundation of Confidence

I learned that **tests aren't optional** for published packages. Users depend on your code working correctly. Here's the testing stack I built:

### Unit Tests (Vitest + Vue Test Utils)

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CenterDiv from '../../src/runtime/components/CenterDiv.vue'

describe('CenterDiv', () => {
  it('renders with default props', () => {
    const wrapper = mount(CenterDiv, {
      slots: {
        default: '<button>Test</button>',
      },
    })

    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Test')
  })

  it('applies minBlockSize prop', () => {
    const wrapper = mount(CenterDiv, {
      props: { minBlockSize: '100vh' },
    })

    const el = wrapper.element as HTMLElement
    expect(el.style.minBlockSize).toBe('100vh')
  })
})
```

**Coverage:**

- Component rendering
- Props (axis, as, minBlockSize)
- Style application
- 7 tests total

### E2E Tests (Playwright)

```typescript
import { test, expect } from '@playwright/test'

test('component renders and centers content', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')

  const centerDiv = page.locator('.nuxt-center-div').first()
  await expect(centerDiv).toBeVisible()

  const styles = await centerDiv.evaluate((el) => {
    const computed = window.getComputedStyle(el)
    return {
      display: computed.display,
      placeItems: computed.placeItems,
    }
  })

  expect(styles.display).toBe('grid')
  expect(styles.placeItems).toBe('center')
})
```

These tests verify the component works in **actual browsers**, not just in Node.

### Accessibility Tests (vitest-axe)

```typescript
import { axe } from 'vitest-axe'

it('has no accessibility violations', async () => {
  const wrapper = mount(CenterDiv, {
    slots: {
      default: '<button>Accessible Button</button>',
    },
  })

  const results = await axe(wrapper.element)
  expect(results.violations).toHaveLength(0)
})
```

This caught issues I might have missed, like missing ARIA labels or incorrect heading hierarchy.

**Final count:** 11 tests, 100% passing.

---

## The Module Structure: Following Best Practices

The official Nuxt module template provides excellent scaffolding. Here's the structure I ended up with:

```md
center-div-module/
├── src/
│   ├── module.ts                    # Module registration
│   └── runtime/
│       ├── components/
│       │   └── CenterDiv.vue       # Component
│       ├── plugin.ts               # Directive
│       └── types.ts                # TypeScript definitions
├── playground/                     # Local development
│   ├── app.vue
│   └── nuxt.config.ts
├── test/
│   ├── unit/
│   │   └── CenterDiv.test.ts
│   └── e2e/
│       └── CenterDiv.spec.ts
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

### Key Files Explained

**`src/module.ts`** - Registers the component and plugin:

```typescript
import { defineNuxtModule, addComponent, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'center-div',
    configKey: 'centerDiv',
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'CenterDiv',
      filePath: resolver.resolve('./runtime/components/CenterDiv.vue'),
    })

    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})
```

**`playground/`** - Critical for development. Run `pnpm dev` and you get a live Nuxt app with your module loaded. Instant feedback loop.

---

## The Build Process: Getting Ready for npm (Node PAckage Manager)

Building the module involves several steps:

### 1. Module Builder

Nuxt provides `nuxt-module-build` which handles:

- Bundling (ESM (ECMAScript Modules) + CommonJS)
- TypeScript compilation
- Type definitions generation

```bash
pnpm run prepack
```

This creates the `dist/` folder:

```md
dist/
├── module.mjs              # ESM entry
├── module.cjs              # CommonJS entry
├── module.d.ts             # TypeScript definitions
└── runtime/
    ├── components/
    │   └── CenterDiv.vue
    └── plugin.js
```

### 2. Package Configuration

The `package.json` tells npm what to publish:

```json
{
  "name": "@colabottles/center-div",
  "version": "0.1.2",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/types.d.ts",
      "import": "./dist/module.mjs",
      "require": "./dist/module.cjs"
    }
  },
  "files": [
    "dist"
  ]
}
```

**Only the `dist/` folder gets published.** This keeps the package size tiny (4.4 kB).

### 3. Publishing

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages (@username/package-name).

---

## CI/CD: Automating Quality

GitHub Actions runs tests on every push:

```yaml
name: ci
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-node@v6
        with:
          node-version: 20
      - run: corepack enable
      - name: Install dependencies
        run: pnpm install
      - name: Prepare playground
        run: pnpm run dev:prepare
      - name: Test
        run: pnpm run test
```

This catches issues **before** they reach users.

---

## Challenges I Faced (And How I Solved Them)

### Challenge 1: TypeScript Configuration

**Problem:** Tests failed in CI because `tsconfig.json` extended `.nuxt/tsconfig.json` which doesn't exist until you run the dev server.

**Solution:** Create a standalone `tsconfig.json` that doesn't depend on generated files:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "types": ["node", "vitest"]
  },
  "include": ["src/**/*", "test/**/*"]
}
```

### Challenge 2: Vite Version Conflicts

**Problem:** Vitest and @vitejs/plugin-vue used different Vite versions, causing type errors.

**Solution:** Add a type assertion to ignore the incompatibility:

```typescript
export default defineConfig({
  // @ts-expect-error - Vite version conflict
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
  }
})
```

### Challenge 3: ESLint Checking Generated Files

**Problem:** ESLint was throwing 2,825 errors from generated files in `playwright-report/`.

**Solution:** Add ignore patterns to `eslint.config.mjs`:

```javascript
export default createConfigForNuxt({
  // ...
}).append({
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
    '**/.nuxt/**',
    '**/playwright-report/**',
    '**/test-results/**',
  ],
})
```

---

## Real-World Usage

Once published, using the module is straightforward:

### Installation

```bash
npm install @colabottles/center-div
```

### Configuration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@colabottles/center-div']
})
```

### Component Usage

```html
<template>
  <!-- Full viewport centering -->
  <CenterDiv min-block-size="100vh">
    <button>Click Me</button>
  </CenterDiv>

  <!-- Horizontal only -->
  <CenterDiv axis="horizontal" min-block-size="50vh">
    <nav>Navigation</nav>
  </CenterDiv>

  <!-- Custom semantic element -->
  <CenterDiv as="main">
    <h1>Main Content</h1>
  </CenterDiv>
</template>
```

### Directive Usage

```html
<template>
  <div v-center>
    Quick full-viewport centering
  </div>
</template>
```

---

## What I Learned

### 1. Developer Experience Matters

Small details make a huge difference:

- Clear prop names (`minBlockSize` vs `minHeight`)
- TypeScript autocomplete
- Helpful README with examples
- Fast development server

### 2. Tests Give Confidence

Every test I wrote caught a real bug. The time invested in testing paid off immediately.

### 3. Accessibility Isn't Optional (Which I Already Knew)

Building accessible components from the start is easier than retrofitting them later. Using semantic HTML and CSS Grid made accessibility almost automatic.

### 4. The Nuxt Ecosystem is Excellent

The module template, build tools, and documentation made this process smooth. The Nuxt team has done incredible work.

### 5. Community Feedback is Essential

Reaching out to experienced developers provides invaluable perspective before launching.

---

## Performance Metrics

The final package is **tiny**:

```md
Package size: 4.4 kB (compressed)
Unpacked size: 10.3 kB
Files: 15
```

For comparison, that's smaller than a single medium-resolution image. Zero dependencies beyond Nuxt itself.

---

## Future Improvements

Ideas for future versions:

1. **Gap prop** for spacing between centered items:

   ```html
   <CenterDiv gap="2rem">
     <button>One</button>
     <button>Two</button>
   </CenterDiv>
   ```

2. **Animation support** for smooth centering transitions

3. **Max inline size** for constraining width:

   ```html
   <CenterDiv max-inline-size="60ch">
     <article>Readable text width</article>
   </CenterDiv>
   ```

4. **Nuxt DevTools integration** to visualize all CenterDiv instances on a page

---

## Try It Yourself

The module is live on npm:

```bash
npm install @colabottles/center-div
```

**Links:**

- [npm:](https://www.npmjs.com/package/@colabottles/center-div)
- [GitHub:](https://github.com/colabottles/center-div-module)
- Documentation: _See README on GitHub_

---

## Key Takeaways for Building Your Own Module

1. **Start with the official template:** `npx nuxi init my-module -t module`

2. **Test from day one:** Unit, E2E, and accessibility tests

3. **Use the playground:** Instant feedback beats blind development

4. **Focus on DX:** Clear APIs, good docs, TypeScript support

5. **Make it accessible:** Follow WCAG guidelines from the start

6. **Keep it small:** Every kilobyte matters

7. **Automate everything:** CI/CD catches issues early

8. **Get feedback:** Community review prevents bad patterns

---

## Conclusion

Building a Nuxt module taught me more about Vue, TypeScript, testing, and accessibility than any tutorial could. The process of taking an idea from concept to published package—with real users able to `npm install` it—is incredibly rewarding.

If you have a common pattern in your Nuxt projects, consider extracting it into a module. The ecosystem benefits, and you'll learn a ton in the process.

**What patterns do you find yourself repeating in Nuxt?** Maybe your next module idea is already in your codebase.

---

## Resources

- [**Nuxt Module Template:**](https://github.com/nuxt/starter/tree/module)
- [**Nuxt Module Author Guide:**](https://nuxt.com/docs/guide/going-further/modules)
- [**WCAG Guidelines:**](https://www.w3.org/WAI/WCAG21/quickref/)
- [**Vitest Documentation:**](https://vitest.dev/)
- [**Playwright Testing:**](https://playwright.dev/)
