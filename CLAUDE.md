# Bolade portfolio — current build direction

This document supersedes the original register/rail design. The owner requested this pivot in October 2026. `portfolio-mockup.html` is a historical reference, not the current design target.

## Continuation context — 19 October 2026

- Read `HANDOFF.md` before continuing. The redesign is implemented locally, with uncommitted changes; preserve them.
- Current branch at handoff: `portfolio-build`.
- The actual live site at `boladeolayode.xyz` is a coming-soon page. This redesign belongs to a separate branch and development environment.
- Do not merge into production, deploy to production, change domain/hosting/environment mappings, or assume a GitHub push is isolated without checking the existing configuration. The user wants the live coming-soon site preserved. No push or deployment was performed in this session.
- The configured canonical URL is the intended eventual production domain, not evidence that the redesign is live.

## Purpose

A hiring and client acquisition portfolio for Olayode Bolade Emmanuel, a full-stack software engineer based in Lagos. Communicate engineering judgment through real operational systems, technical decisions, and clear attribution. Primary audiences: hiring managers, engineering leads, founders, recruiters, and prospective clients.

## Design system

Quiet confidence, editorial precision, and a premium engineering aesthetic.

- Warm ivory `--paper: #f8f7f3`; muted surface `--paper-2: #eeede8`.
- Charcoal `--ink: #222522`; secondary text `--ink-2: #505550`; muted text `--muted: #656a65`.
- Cobalt `--accent: #344cdd`; hover `#263bb6`; pale accent surface `#e9ecfb`.
- Dark green-charcoal `--dark: #202820` for the contact section.
- Fonts: Archivo headings, Instrument Sans body, IBM Plex Mono for concise metadata. Loaded through next/font with latin subsets and swap.
- Container: 1248px maximum. Hero and projects use a 12-column grid. Responsive adaptations at 1100, 800, and 600px.
- Editorial type scale, ample section spacing, hairline borders, small corner radii. No decorative code, fake terminals, neon, gradients, stock images, or fabricated dashboard screenshots.
- Short hover transitions only. No hidden-on-load content. Honor reduced motion.

## Architecture

Next.js App Router, TypeScript, Tailwind CSS v4. Server components by default. No new dependencies needed for the redesign.

Routes: `/`, `/work/[slug]`, generated sitemap, robots, Open Graph image, custom 404.

Homepage: sticky navigation → hero with authentic portrait → factual project/organization strip → selected work → expertise → engineering philosophy → about and experience → contact → footer.

Core files:
- `lib/site.ts`: identity, availability, socials, project presentation/visual configuration, expertise, principles, experience, testimonials.
- `content/work/*.mdx`: case-study frontmatter and narrative.
- `lib/content.ts`: filesystem content parsing.
- `components/site/Chrome.tsx`: shared navigation, contact, footer.
- `components/site/SystemVisual.tsx`: labeled simplified architecture diagrams, or authentic screenshots when configured.
- `app/globals.css`: design tokens and responsive component styles.

Case studies: Problem → Constraints → Engineering decisions → Implementation → Results → Lessons.

The original rail, app icon, archive, and reveal components remain unused for reference. Do not reintroduce the old rail into the new design.

## Content rules

Never invent credentials, employment, metrics, testimonials, screenshots, project capabilities, or client approval. Existing MDX claims are owner-provided content, not independently verified facts.

- Keep `site.available` false until the owner confirms current availability.
- Testimonials render only when genuine approved entries exist.
- Live product / GitHub links render only when supplied in project configuration.
- Diagram visuals must remain labeled as simplified architecture. They are not screenshots.
- Replace TODO(content) entries with owner-supplied details. Do not fill them with guesses.
- Albis Care incident publication needs client permission. If unavailable, remove the identifying details throughout title, summary, body, metadata, and visuals; the frontmatter anonymization flag alone is insufficient.
- Confirm Twale NDA constraints before public release.
- The owner requested an apps section with placeholders. Draft cards are explicitly labeled; only owner-supplied store URLs should become clickable.

## Quality and verification

Semantic sections, logical headings, visible focus, skip navigation, readable contrast, working direct contact links, mobile layouts from 320px, optimized portrait, no mandatory client JS for page content.

Use local installed Next.js docs under `node_modules/next/dist/docs/` before framework changes.

Validate with `npm run lint`, `npx tsc --noEmit --incremental false`, and `npm run build`. Target Lighthouse 95+ and WCAG 2.2 AA; do not claim measured scores or compliance without an audit.

## Launch items

- Client/NDA clearance for case-study narratives.
- Authentic screenshots and completed implementation/outcome details.
- Confirm all biographical statements, résumé, social profiles, and availability.
- Manual keyboard, screen reader, and real-device checks.
- Mobile Lighthouse and deployed social-preview checks.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
