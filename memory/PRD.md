# Portfolio Enhancement — PRD

## Original Problem Statement
Roughly implemented dark/orange portfolio. Goal: make it feel more professional, polished, and alive **without changing the design language, color palette, typography, or layout structure**. Ship enhancements only.

## Stack
- TanStack Start (React 19) + Vite + SCSS modules
- Added: `framer-motion@12.42.2` (dev-added via `yarn add --ignore-engines`)

## What's Been Implemented — 2026-01

### Shared infrastructure
- `src/lib/motion.ts` — shared variants (`fadeUp`, `scaleFade`, `staggerContainer`), `spring` / `softSpring` presets, `easeOutExpo`.
- `src/components/portfolio/AnimatedSection.tsx` — polymorphic wrapper (`section`/`div`/`ul`) with staggered child reveal on scroll into view (`viewport once, amount 0.2`).
- `<MotionConfig reducedMotion="user">` at `__root.tsx` — auto-simplifies all framer-motion animations for users with `prefers-reduced-motion`. SCSS keyframes are additionally guarded per-file with `@media (prefers-reduced-motion: reduce)`.

### Page reveal
- `PageReveal.tsx` — accent-colored bar sweeps across the bottom + diamond mark scales/fades in. Total < 800 ms, skippable on any keydown/pointerdown, no layout shift (fixed overlay, unmounts after done).

### Nav (`Nav.tsx` + `.module.scss`)
- Nav container starts transparent; transitions to blurred + bordered background once `scrollY > 120`.
- Scroll-spy via `IntersectionObserver` — active link gets a shared `layoutId="nav-underline"` accent underline that springs between items.
- Fade-in slide from top on load.

### Hero (`Hero.tsx` + `.module.scss`)
- Two blurred, low-opacity `$accent`/`$accent-2` radial blobs drift behind the portrait via CSS keyframes.
- Portrait: opacity + scale-in (0.92 → 1) over 0.95 s.
- Signature word: opacity + scale-in with y-slide, 0.35 s delayed.
- Staggered reveals: availability pill → intro → socials → CTAs → stats (grid-level stagger).
- Social icons: spring `y: -4, scale: 1.08` on hover, tap scale-down 0.94.
- CTAs: spring lift + custom `↗` arrow micro-rotation, elevated glow shadow.

### Work (`Work.tsx` + `.module.scss`)
- Marquee rewritten: doubled track (12 items), `translate3d(0) → translate3d(-50%, 0)` linear infinite, edge fade mask, `animation-play-state: paused` on hover.
- Project cards: staggered scroll-in reveal, spring hover (`y: -6, scale: 1.02`), enhanced glow shadow, subtle initials float on hover.

### Services (`Services.tsx` + `.module.scss`)
- Staggered eyebrow → heading → cards; each card's point-tags also stagger in.
- Spring hover on cards, warm glow shadow, tag border shifts to accent tint.

### Experience (`Experience.tsx` + `.module.scss`)
- Vertical rail on the left with a gradient `$accent → $accent-2` progress line whose `height` is bound to `useScroll` (offset `start 80% → end 60%`) via a spring for smoothness.
- Each item has a glowing node marker on the rail.
- Items stagger-fade into view.

### About (`About.tsx`)
- Staggered eyebrow → heading → lead → grid cols → skills.
- Cert list and skill tags stagger individually.

### Contact (`Contact.tsx` + `.module.scss`)
- Staggered heading → actions → links.
- Primary/secondary buttons have spring hover, glow shadow, and arrow micro-rotation.

## Performance & Accessibility
- All animations use `transform` + `opacity` only (GPU-friendly, no layout thrashing).
- `will-change: transform` set where beneficial.
- Reduced-motion respected (framer-motion `reducedMotion="user"` + per-file CSS media queries for keyframe animations).
- `viewport={{ once: true }}` — reveals don't re-run on scroll back up.
- No new colors, fonts, or SCSS structure changes; tokens (`$accent`, `$radius`, `pill`, `eyebrow`) reused.

## Verification
- `npx tsc --noEmit` → clean.
- `npx vite build` → succeeds; framer-motion chunk ~97 KB gzipped.
- Testing agent skipped per user request.

## Backlog / Future
- P2: Add page-transition variants for future multi-route setup.
- P2: Optional cursor accent trail effect.
- P2: Configurable global scroll progress bar under the nav.
