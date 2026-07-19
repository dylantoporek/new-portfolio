# Dylan Toporek — Portfolio

My personal portfolio site: a single-page Next.js app with a fixed intro panel, scrollable About / Experience / Projects sections, and animated "lava lamp" section dividers built from SVG gooey filters.

## Stack

- **Next.js** (App Router) with **TypeScript** (strict mode)
- **framer-motion** for scroll-reveal, hover, and divider animations
- **CSS Modules** for styling — no UI framework
- **Playwright** for smoke tests, **ESLint + Prettier** for code quality
- **GitHub Actions** CI running lint, typecheck, build, and tests on every PR

## Highlights

- **Lava lamp dividers** — SVG circles animated with framer-motion behind a gooey filter (`feGaussianBlur` + `feColorMatrix`), so blobs merge into the pool and each other as they rise and sink. Blob positions are deterministic to keep server and client renders identical.
- **Accessibility** — keyboard-navigable throughout: section nav and accordions are real buttons with `aria-expanded`/`aria-current`, focus-visible styles, semantic `<section>`/`<nav>` landmarks, and `prefers-reduced-motion` support that stills the animations.
- **Responsive** — desktop gets the two-column layout; mobile collapses to a single column with a slide-out menu driven by an IntersectionObserver.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the dev server                               |
| `npm run build`     | Production build                                   |
| `npm run lint`      | ESLint (next/core-web-vitals + TS)                 |
| `npm run typecheck` | TypeScript, no emit                                |
| `npm run format`    | Prettier write                                     |
| `npm test`          | Playwright smoke tests (starts its own dev server) |

## Structure

```
app/
  components/
    leftSide/     # Fixed panel: heading, section nav, social links
    rightSide/    # Scrolling content: About, Experience, Projects
    lavaLamp.tsx  # Animated SVG section divider
    sideMenu.tsx  # Mobile slide-out navigation
  hooks/          # useIsMobile shared breakpoint hook
  styles/         # Global styles + CSS Modules
tests/            # Playwright smoke tests
```
