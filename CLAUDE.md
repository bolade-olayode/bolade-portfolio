# CLAUDE.md — boladeolayode.xyz

Build spec for the personal portfolio of **Olayode Bolade Emmanuel**, full-stack engineer.

Read this file fully before writing code. It is the source of truth for structure, design tokens, content model, and constraints. Where it conflicts with a general best practice, this file wins.

A visual reference mockup exists at `portfolio-mockup.html`. It is a static single file — treat it as the design target, not as code to port.

---

## 1. Purpose

**Primary audience:** hiring managers and technical founders evaluating Bolade for a full-time or contract engineering role.

**Secondary audience:** freelance clients arriving from Upwork.

**The job of this site:** in under 90 seconds, convince a technical reader that Bolade builds internal tools, data workflows, and SaaS platforms with real engineering judgment — not just that he can ship features.

**Positioning line (do not dilute):**
> Full-stack engineer — internal tools, data workflows, and SaaS platforms.

Commerce and WordPress work appears on the site, but in the archive table, never as headline material.

---

## 2. Design direction

### The thesis

Bolade builds operational systems — dispatch boards, care rotas, audit trails, role permissions, redemption ledgers. The site is framed as **a register**: a light, precise record of work, closer to an operations logbook than to a marketing page.

Every case study carries a real reference ID in the form `{CLIENT}-{YEAR}-{NN}`. This is the signature device. Numbering is justified here **only** because the content genuinely is a register of records — do not add numbered markers to sections, nav items, or anything else that isn't an actual record.

### Light, not dark — and why

This is a deliberate reversal from an earlier draft. Do not flip it back.

The screenshots in the case studies are admin dashboards, vendor panels and CRM views — light-mode UI. On a dark site each screenshot becomes a bright rectangle punched into the page. On a light site they integrate, and the page reads as an extension of the software rather than a wrapper around it.

Secondary reasons: dark navy sits one step from the most-cloned portfolio in this market; nearly every AI-generated portfolio in 2026 is dark, so light signals more; and case studies are long-form reading.

### Colour tokens

The paper is **cool**, not cream. The accent is a deep **ochre**, not terracotta. Both distinctions matter — warm cream plus terracotta is the single most common generated-design palette in circulation, and landing on it undoes the point.

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAFAF8` | Page background. Cool near-neutral. |
| `--paper-2` | `#F2F2EE` | Hover surfaces, row highlights. |
| `--ink` | `#14171A` | Primary text. Cool near-black, never pure `#000`. |
| `--ink-2` | `#3D4548` | Body prose, secondary text. |
| `--muted` | `#6B7378` | Metadata, captions, labels. |
| `--rule` | `rgba(20,23,26,0.11)` | Borders and dividers. |
| `--rule-soft` | `rgba(20,23,26,0.06)` | Table rows, the background column grid. |
| `--ochre` | `#9C6408` | Accent **for text and links**. Passes 4.5:1 on paper. |
| `--ochre-bright` | `#E39A16` | Accent for **non-text marks only** — dots, rules, the logo. Fails text contrast; never set copy in it. |
| `--ochre-wash` | `rgba(227,154,22,0.09)` | The availability chip background. Nothing else. |

Rules:
- Target no more than three accent-coloured elements per viewport.
- No gradients anywhere. No shadows except a single 1px contact shadow under app icons.
- Border radius: `2px` on small elements, `4px` on rows, `15px` on app icons (matching iOS squircles). Nearly square everywhere else.

### Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Archivo**, 500–600, `font-stretch` 105–112% | Institutional signage lineage — chosen because the site is framed as a register, not because it's a neutral grotesque. Headings, name, record titles. |
| Body | **Instrument Sans** | Prose, case study text. |
| Utility | **IBM Plex Mono** | Record IDs, section labels, metadata, stack chips, table columns. |

Self-host all three via `next/font/google`, subset to latin.

**Do not set body copy in monospace.** The sans/mono contrast is what makes this read as designed rather than themed.

Body copy `15px`, line-height `1.65`. Case study prose `16.5px`, line-height `1.72`, max measure `62ch`.

### Texture

- A faint vertical column grid at 72px, drawn with `--rule-soft`, fixed behind content. This is the register's ruled paper. It is the only decoration on the site.
- Elevation comes from `--paper-2` fills and hairline borders. Not shadows.

### Motion

- Scroll reveal: `translateY(11px)` → `0`, opacity `0` → `1`, `500ms`, `cubic-bezier(.16,1,.3,1)`. Once per element, then unobserve.
- Hover: `120–160ms` maximum.
- The nav's active marker is a hairline that extends from 18px to 34px and picks up `--ochre-bright`.
- No page-load animation, no preloader, no counter, no typewriter. A hiring manager should not wait to see content.
- `prefers-reduced-motion: reduce` disables all of it. Non-negotiable.

### Anti-patterns — do not build these

- Preloaders, intro sequences, loading counters
- Typewriter or typing animations
- Fake terminal windows; acid-green or neon accents
- Particle backgrounds, 3D scenes, WebGL, glassmorphism, backdrop blur
- Scroll-jacking, custom cursors, cursor trails
- A wall of technology logos, or a "tools I use" constellation diagram
- Animated skill percentage bars
- Emoji as section iconography
- A contact form — a form implies a queue; direct email reads as more senior
- Warm cream (`#F4F1EA`) backgrounds or terracotta (`#D97757`) accents — see the colour note above

---

## 3. Structure — v1

```
/                       Home (all sections, single scroll)
/work/[slug]            Case study detail (3 studies)
/writing/[slug]         Article (1 at launch)
/resume.pdf             Static file in /public
```

### Layout

Two columns on desktop, at a `1180px` max width with `352px` left rail and `72px` gutter.

**Left rail — `position: sticky`, full viewport height, does not scroll.** Holds: logo mark, name, role line, one-sentence pitch, availability chip, section nav with scroll-spy, and four links pinned to the bottom (résumé, GitHub, LinkedIn, email). This column is the entire pitch, permanently on screen.

**Right column — scrolls.** Six sections in this order:

| Section | Content |
|---|---|
| About | Three paragraphs. What he builds, how he works, what he's looking for. |
| Selected work | Three case study records as rows. Each links to its own page. |
| Shipped apps | Icon row with role framing and store badges. |
| Experience | Three roles, dated, brief. Links to the full résumé. |
| Archive | Dense table: year, project, client, built with, link. |
| Writing | One piece at launch. |
| Contact | One line, email, colophon. |

**Work comes before experience.** This is deliberate and load-bearing. His employment history is respectable but not what sells him; his work is stronger. Do not reorder.

Below `940px`: rail becomes static and stacks above the content, nav hides, archive drops the client and stack columns.

### Case study page structure

Fixed six-part structure, no exceptions. The consistency is what makes it read as rigorous.

1. **Context** — the business, the operational problem, who was affected
2. **Constraints** — budget, legacy systems, team, timeline, regulatory
3. **Decisions** — what was chosen, what was rejected, and why. Argue both sides.
4. **What I built** — implementation, with real screenshots or architecture diagrams
5. **Outcome** — measured where possible, honest where not
6. **What I'd do differently** — do not skip. Strongest seniority signal on the site.

---

## 4. Content

### The three case studies

**`ALB-2024-01` — Albis Care (UK domiciliary care provider)**
Care management platform: WordPress site plus a React Native/Expo companion app. Roughly 15 staff and 60+ care clients on the platform as of August 2026. Two threads: the RBAC hierarchy across staff, family and admin roles; and incident response after a server-side spam campaign injected around 13,000 casino posts into the database — SQL cleanup, credential rotation, hardening.

The incident story is the most distinctive thing on this site. Lead with it.

> **Blocking:** confirm client permission before publishing the incident. If declined, anonymise to "a UK domiciliary care provider" and strip identifying detail — the story survives without the name.

**`TWL-2025-01` — Twale / PAKEJ (Next Digital Solutions)**
Logistics SaaS digitising package delivery across Nigeria's inter-city motor parks. PWA-first, Laravel backend, MySQL with a PII vault, Soketi websockets, Cloudflare R2.

The architecture study. Three decisions to unpack: park-to-park relay over door-to-door, QR and tracking-code scanning over OTP, GPS deferred to a later phase. Write the rejected options as seriously as the chosen ones.

**`FBC-2025-01` — FoodBank CRM**
Multi-role NGO platform: vendor inventory, beneficiary credits, subscriptions, redemption. Built on Dolibarr ERP, run in production, then the backend was scrapped and rebuilt on Laravel with a Next.js frontend.

The judgment study. Why Dolibarr looked correct, where it broke against real requirements, what the rebuild cost and bought. Do not soften the reversal — publicly reversing your own architecture decision is rare and reads as senior.

Reserve if one is blocked: **Document data pipeline** (Python, python-docx, PyPDF2 — raw legal documents to publication-ready output, 80% reduction in manual processing).

### Metrics

Real operational numbers are the fastest differentiator available, because most portfolios in this market show side projects with no usage. Surface them inline in the record rows.

Confirmed as of August 2026: Albis Care ~15 staff, 60+ care clients, ~13,000 injected records cleared. Aura by Nimi ~30 orders/day.

Do not invent, round up, or extrapolate a number. An unverifiable metric on a portfolio is worse than no metric.

### Shipped apps

Role framing must be exact:

- **meetpie** — "Frontend — all app screens." Bolade built the frontend; a collaborator built the backend, and that collaborator lists the app on his own site. Accurate scoping matters here.
- **Albis Care** — "Built for Albis Care UK." Published under the client's account. Do not imply ownership.
- **FoodBank** — "Full stack."

Presentation: 64px rounded icons with real app artwork, name, role line, platform badges. Official Apple and Google store badges only, unmodified, from their brand resource pages.

> **Blocking:** confirm which apps are actually live in each store, and under whose developer account, before this section ships. Anything not live is left out — no "coming soon" entries.

Store metadata, if used, is fetched at **build time only**. Apple's iTunes Lookup endpoint (`https://itunes.apple.com/lookup?id={appId}`) is public and needs no key. Play Store has no public API — `google-play-scraper` in a prebuild script, with a committed JSON fallback at `content/apps/cache.json`. **The build must never fail because a store endpoint changed.**

### Writing

One piece at launch. Every respected engineer portfolio has writing, and it is the cheapest way to outclass a peer site that only has project cards. His résumé already claims he writes clear implementation notes — this proves it.

Recommended first piece: the Albis Care incident, or the case for leaving Dolibarr.

### Content model

Case studies in `content/work/*.mdx`, articles in `content/writing/*.mdx`. Adding one is writing a file — never edit a component to add content.

```yaml
---
id: ALB-2024-01
slug: albis-care
title: Rebuilding permissions and recovering a compromised care platform
client: Albis Care
clientAnonymized: false      # true → render anonymizedAs instead
anonymizedAs: A UK domiciliary care provider
role: Full-stack engineer
period: 2024–present
status: live                 # live | shipped | ongoing | archived
stack: [WordPress, PHP, MySQL, React Native, Expo, RBAC]
summary: One sentence. Appears in the record row on the home page.
facts:
  - value: "~15"
    label: Staff on platform
  - value: "60+"
    label: Care clients
cover: /work/albis-care/cover.png
featured: true
order: 1
---
```

Render with `next-mdx-remote/rsc`, frontmatter via `gray-matter`. No CMS in v1 — overhead for four documents.

---

## 5. Technical

### Stack

- Next.js App Router, TypeScript, React Server Components by default
- Tailwind CSS v4 — tokens as CSS custom properties in `@theme`, referenced by name. Never hardcode a hex in a component.
- `motion` for animation, in client components only. The scroll reveal and scroll-spy are plain `IntersectionObserver` — do not pull in a library for them.
- `next-mdx-remote/rsc` + `gray-matter`
- `next/font/google` for all three faces
- Vercel. `boladeolayode.xyz` is already connected.

### Structure

```
app/
  layout.tsx              Rail, column grid, fonts
  page.tsx                Home
  work/[slug]/page.tsx    Case study (generateStaticParams)
  writing/[slug]/page.tsx Article
components/
  rail/                   Sticky rail, nav, scroll-spy, availability chip
  record/                 Record row, fact strip, stack chips
  apps/                   Icon row, store badges
  archive/                Archive table
content/
  work/*.mdx
  writing/*.mdx
  apps/apps.json + cache.json
lib/
  content.ts
  stores.ts
scripts/
  fetch-store-data.ts     prebuild
public/
  resume.pdf
```

### Quality floor

Build to these without announcing them:

- Lighthouse 95+ across all four categories, mobile profile
- LCP under 1.5s on throttled 4G — this must be fast on a Nigerian mobile network, not just on fibre
- All images through `next/image`, AVIF/WebP, explicit dimensions, zero layout shift
- Visible keyboard focus: 2px `--ochre` ring at 3px offset. Do not remove outlines.
- Full keyboard navigability, correct heading hierarchy, real alt text on every screenshot
- Text contrast minimum 4.5:1 — `--ochre-bright` is for marks only and must never carry text
- `prefers-reduced-motion` honoured throughout
- Responsive from 320px
- Semantic HTML. Record rows are anchors, not click-handled divs.

### SEO

- Per-page metadata via the Metadata API
- OG images via `next/og`, using the record format so shared links look like register entries
- `Person` and `CreativeWork` JSON-LD
- `sitemap.ts`, `robots.ts`

### Analytics

Vercel Analytics only. No third-party trackers, no cookie banner.

---

## 6. Working agreement

- **Do not invent content.** No placeholder case study text, no fabricated metrics, no lorem ipsum. Missing content gets a marked `TODO(content)` — a portfolio with invented numbers is worse than one with fewer sections.
- **Do not add sections not specified here** without asking. Scope creep is how v1 fails to ship.
- Ask before adding any dependency beyond section 5.
- Prefer server components. `"use client"` only where interaction requires it.
- Check every component against the anti-pattern list in section 2 before considering it done.

## 7. Open items — resolve before launch

- [ ] Client permission for the Albis Care security incident study
- [ ] Confirm which apps are live and under which developer accounts
- [ ] Real app icon artwork at 512px
- [ ] Real screenshots for all three case studies
- [ ] Final logo and favicon set from the design team
- [ ] GitHub and LinkedIn URLs
- [ ] Current résumé PDF at `public/resume.pdf`
- [ ] Confirm NDA constraints on Twale / Next Digital Solutions
- [ ] Write the first article
