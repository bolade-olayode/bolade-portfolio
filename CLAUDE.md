# CLAUDE.md — boladeolayode.xyz

Build spec for the personal portfolio of **Olayode Bolade Emmanuel**, Full-Stack Engineer.

Read this file fully before writing code. It is the source of truth for structure, design tokens, content model, and constraints. When something here conflicts with a general best practice, this file wins.

---

## 1. Purpose

**Primary audience:** hiring managers and technical founders evaluating Bolade for a full-time, contract, or fractional engineering role.

**Secondary audience:** freelance clients arriving from Upwork.

**The job of this site:** in under 90 seconds, convince a technical reader that Bolade builds internal tools, data workflows, and SaaS platforms with real engineering judgment — not just that he can ship features.

**Positioning line (do not dilute):**
> Full-Stack Engineer — internal tools, data workflows, and SaaS platforms.

Everything on the site either supports that claim or gets cut. Commerce and WordPress work exists on the site, but as supporting evidence of range, never as headline material.

---

## 2. Design direction

### The thesis

Bolade's work is operational systems — dispatch boards, audit trails, role permissions, tracking codes, subscription states, waybills. The site should feel like **a system of record**: an operations console, a ledger, a departure board. Precise, dense where it needs to be, quiet everywhere else.

It should **not** feel like a hacker terminal. See anti-patterns below.

### Signature element: the Ledger rail

A persistent monospace metadata rail — vertical on desktop (left edge, ~14px type), collapsed into a sticky top strip on mobile. It behaves like an audit log: it updates as the reader scrolls to reflect the current section.

```
┌──────────┬──────────────────────────────────────┐
│ SEC 02   │                                      │
│ WORK     │        SELECTED WORK                 │
│ ────     │                                      │
│ 03 ENT   │   ALB-2024-01  Albis Care        →   │
│ STATUS   │   TWL-2025-01  Twale / PAKEJ     →   │
│ LIVE     │   FBC-2025-01  FoodBank CRM      →   │
│          │                                      │
└──────────┴──────────────────────────────────────┘
```

Every case study carries a record ID in this format: `{CLIENT}-{YEAR}-{NN}`. Numbering is justified here because the site is framed as a record system — do not add numbered markers anywhere the content is not actually an ordered record.

Spend the boldness here. Everything else stays disciplined.

### Color tokens

Color encodes **status**, not brand. It is never decorative.

| Token | Hex | Use |
|---|---|---|
| `--base` | `#0B0D0F` | Page background. Cold near-black, never pure `#000` — pure black causes halation against light text on OLED. |
| `--raised` | `#141819` | Cards, panels, elevated surfaces. |
| `--overlay` | `#1C2124` | Hover states, popovers, code blocks. |
| `--hairline` | `rgba(255,255,255,0.07)` | All borders and rules. Never a solid grey. |
| `--text` | `#E4E8EA` | Primary text. |
| `--muted` | `#7A838A` | Metadata, captions, secondary. |
| `--signal` | `#F0A028` | Status: active, live, in progress. |
| `--resolved` | `#3E8C7F` | Status: shipped, resolved, complete. |

Rules:
- `--signal` and `--resolved` appear as **status chips and inline markers only**. Never as a heading color, never as a gradient, never as a large fill.
- Target no more than three accent-colored elements per viewport.
- No gradients anywhere except a single 2% film grain overlay (see Texture).

### Typography

Three roles, three faces. All available on Google Fonts or via free license — self-host through `next/font/local` or `next/font/google` for performance.

| Role | Face | Notes |
|---|---|---|
| Display | **Archivo** (use Expanded widths at 600–700) | Institutional signage feel. Headings only. |
| Body | **Instrument Sans** | Prose, case study text, UI labels. |
| Utility | **Commit Mono** | The Ledger rail, record IDs, metadata, timestamps, stack labels, code. |

The mono/sans contrast is what makes this read as designed rather than themed. **Do not set body copy in monospace.** That is the single fastest way to make this look cheap.

Type scale (rem, 1rem = 16px): `0.75 / 0.8125 / 0.875 / 1 / 1.25 / 1.75 / 2.5 / 3.5 / 5`

Body copy: `1rem`, line-height `1.65`, max measure `68ch`. Case study prose gets `1.0625rem` and `1.7`.

### Texture and depth

- **Film grain:** a tiled SVG noise overlay at 2–3% opacity, `position: fixed`, `pointer-events: none`, above the background and below content. This kills banding on dark surfaces and adds tactility.
- **Hairline grid:** a faint vertical column grid visible at section boundaries, drawn with `--hairline`. Reinforces the ledger metaphor. Desktop only.
- **Elevation** comes from `--raised` surfaces plus a hairline border. **No box-shadows.** Shadows do not read on dark backgrounds and add mush.
- Border radius: `2px` on small elements, `4px` on cards. Nearly square. Never pill-shaped anything except status chips.

### Motion

Motion is felt, not watched.

- Scroll reveals: `translateY(12px)` → `0`, opacity `0` → `1`, `450ms`, `cubic-bezier(0.16, 1, 0.3, 1)`. Stagger children by `60ms`.
- Hover: `120ms` response maximum. Anything slower feels broken.
- Page transitions: a short crossfade with the Ledger rail persisting across the change.
- The Ledger rail values change with a fast character-swap, not a slow typewriter effect.
- **`prefers-reduced-motion: reduce` disables all of it.** Non-negotiable — content must be fully readable and navigable with motion off.

### Anti-patterns — do not build these

These will make the site read as junior. They are explicitly out of scope:

- Fake terminal windows with traffic-light dots
- Typewriter or typing animations, especially in the hero
- Acid-green (`#00FF41`, `#39FF14`) or any neon accent — this is the default AI-generated dark-mode look
- Particle backgrounds, animated starfields, matrix rain
- 3D scenes, Three.js, WebGL — none of it argues for the positioning
- Glassmorphism, backdrop blur panels, glow effects
- Scroll-jacking or horizontal scroll hijacking
- Custom cursors, magnetic cursors, cursor trails
- A logo wall of 40 technology icons
- Animated skill percentage bars — nobody believes "React 87%"
- Emoji as section iconography
- Pure `#000000` backgrounds

---

## 3. Site structure — v1

Ship these. Everything else is Phase 2.

```
/                       Home
/work/[slug]            Case study detail (3 studies)
/resume.pdf             Static download in /public
```

Phase 2 (stub the routes, do not build): `/apps` (expanded app detail), `/about`, `/writing`.

### Home sections, in order

**1. Hero**
Name, positioning line, and one line of hard proof. No headshot in the hero. No "Hi, I'm..." — open with the claim.

The Ledger rail initializes here showing status `AVAILABLE` (make this a single content variable so it is trivial to flip).

Copy direction — write from what a hiring manager needs to know, plainly:
> Olayode Bolade Emmanuel
> I build the internal tools operations teams actually work in — dashboards, role-based workflows, and the data pipelines behind them.
> Five years shipping for healthcare, logistics, and NGO operators across Nigeria and the UK.

**2. Selected work**
Three case studies as ledger rows, not cards. Each row: record ID, client, one-line problem statement, stack chips, status chip, year. Rows expand on hover with a hairline highlight; click routes to the detail page.

**3. Shipped apps**
See section 5.

**4. Approach**
Bolade's engineering principles, set as a numbered record (ordered here because it describes a real sequence of how he works). Source content is in section 4 — this is the most differentiating copy on the site, so give it real space and typographic weight. Treat it as a manifesto, not a bulleted list.

**5. Also built**
Compact monospace table of secondary work — one line each, no images, no links unless the site is live. This is where the commerce and WordPress work goes: Aura by Nimi, Bagga.ng, Felony Jewelry, the GIG Logistics shipping integrations, the Houzez real estate build.

**6. Contact**
Email, LinkedIn, GitHub, resume download. No contact form — a form implies a queue. Direct email reads as more senior and converts better.

### Case study page structure

Fixed six-part structure. Every study follows it, no exceptions — the consistency is part of what makes it read as rigorous.

1. **Context** — the business, the operational problem, who was affected
2. **Constraints** — budget, legacy systems, team, timeline, regulatory. This section is what separates real case studies from feature lists.
3. **Decisions** — what was chosen, what was rejected, and why. Argue both sides.
4. **What I built** — the implementation, with real screenshots or architecture diagrams
5. **Outcome** — measured where possible, honest where not
6. **What I'd do differently** — do not skip this. It is the strongest seniority signal on the entire site.

---

## 4. Content

### The three case studies

**`ALB-2024-01` — Albis Care (UK domiciliary care provider)**
Care management platform: WordPress site plus a React Native/Expo mobile app. Two threads worth telling — the RBAC permission hierarchy and family-access CRUD design, and the security incident response after a server-side spam campaign injected roughly 13,000 casino posts into the database. The incident work covered structured SQL cleanup, credential rotation, and hardening.

The incident response is the most distinctive story on this site. Almost no portfolio has one. Lead the study with it.

> **Permission required.** Confirm with the client before publishing the security incident. If they decline, anonymize to "a UK domiciliary care provider" and remove identifying detail — the story still works without the name. Do not publish either way until this is resolved.

**`TWL-2025-01` — Twale / PAKEJ (Next Digital Solutions)**
Logistics SaaS digitizing Nigeria's motor park package delivery network. PWA-first MVP, PHP/Laravel backend, MySQL with a PII vault, Soketi WebSockets, Cloudflare R2.

This is the architecture study. The engineering reference locked in three decisions worth unpacking: park-to-park relay over door-to-door, QR and tracking-code scanning over OTP, and GPS deferred to Phase 2. Each is a case of choosing constraints deliberately. Write the rejected options as seriously as the chosen ones.

**`FBC-2025-01` — FoodBank CRM**
Multi-role NGO platform with vendor, admin, and beneficiary workflows covering inventory, credits, subscriptions, and redemption. Originally built on Dolibarr ERP; the entire backend was later scrapped and rebuilt.

This is the judgment study. Why Dolibarr looked correct at the outset, where it broke down against the real requirements, what the rebuild cost, and what it bought. Reversing your own architecture decision publicly is rare and it reads as senior — do not soften it.

Reserve as a fourth study if one of the above is blocked: **Document Data Pipeline** (Python, python-docx, PyPDF2 — raw legal documents to publication-ready output, 80% reduction in manual processing).

### Approach section — source content

Adapt, don't paste verbatim:

- Start from the operational workflow: who uses the tool, what decision they need to make, which data must be trusted
- Design schemas and API boundaries around changing requirements rather than hard-coding one-off assumptions
- Prefer simple, usable interfaces for internal teams over flashy UI that slows daily operations
- Communicate in writing: problem summary, assumptions, edge cases, implementation notes, handoff steps
- Push back constructively when a requirement doesn't match the actual business problem

### Content model

Case studies live in `content/work/*.mdx`. Adding one is writing a file — never edit a component to add content.

```yaml
---
id: ALB-2024-01
slug: albis-care
title: Rebuilding permissions and recovering a compromised platform
client: Albis Care
clientAnonymized: false      # true → render as `anonymizedAs`
anonymizedAs: A UK domiciliary care provider
role: Full-stack engineer
period: 2024–2026
status: live                 # live | shipped | ongoing | archived
stack: [WordPress, PHP, MySQL, React Native, Expo]
summary: One sentence. Appears in the ledger row on Home.
outcomes:
  - Cleaned ~13,000 injected records and hardened the install
  - Designed the RBAC hierarchy for staff, family, and admin roles
cover: /work/albis-care/cover.png
featured: true
order: 1
---
```

Render with `next-mdx-remote/rsc`, parsing frontmatter via `gray-matter`. No CMS in v1 — it is overhead for three documents.

---

## 5. Shipped apps section

### Before building this — open question

**Confirm which apps are actually live in each store, and under whose developer account.** Several were published under client organization accounts, which changes the framing entirely.

- App published under Bolade's account → "Built and published by me"
- App published under a client's org account → "Built for {Client}" — accurate and still credible. Do not imply ownership.
- App not yet live → leave it out. No "coming soon" entries.

Candidates: meetpie (React Native dating app), the Albis Care companion app, the FoodBank CRM app.

### Presentation

- Device mockups with real screenshots — an iPhone frame and an Android frame, not flat rectangles. Use CSS-drawn frames or a single optimized PNG frame asset; do not pull in a heavy mockup library.
- **Official store badges only.** Apple's "Download on the App Store" and Google's "Get it on Google Play" assets, downloaded from their respective brand resource pages and used unmodified. Both companies have binding guidelines on minimum size, clear space, and recoloring. Recolored or redrawn badges are the fastest way to look unprofessional to anyone who has shipped an app.
- Each app: name, one-line description, role framing, platform badges, and a stack line in mono.

### Live metadata — build time only

Fetch store metadata at build, never at runtime.

- **App Store:** the public iTunes Lookup endpoint (`https://itunes.apple.com/lookup?id={appId}`) returns rating, version, icon, and screenshots. No key, no auth.
- **Play Store:** no public API. Use `google-play-scraper` in a build-time script only. It is fragile by nature.

Commit a cached JSON fallback at `content/apps/cache.json`. If a fetch fails during build, fall back to cache and log a warning — **the build must never fail because a store endpoint changed**. Regenerate the cache on successful fetches.

---

## 6. Technical

### Stack

- Next.js (App Router), TypeScript, React Server Components by default
- Tailwind CSS v4 — design tokens defined as CSS custom properties in `@theme`, referenced by name. Never hardcode a hex value in a component.
- `motion` (Framer Motion successor) for animation, imported only in client components
- `next-mdx-remote/rsc` + `gray-matter` for case studies
- `next/font` for all three typefaces, self-hosted, subset to latin
- Deployed on Vercel. Domain `boladeolayode.xyz` is already connected.

### Structure

```
app/
  layout.tsx              Ledger rail, grain overlay, fonts
  page.tsx                Home
  work/[slug]/page.tsx    Case study (generateStaticParams)
components/
  ledger/                 Rail, record row, status chip
  work/                   Case study blocks
  apps/                   Device frames, store badges
content/
  work/*.mdx
  apps/apps.json + cache.json
lib/
  content.ts              MDX loading and parsing
  stores.ts               Build-time store metadata fetch
scripts/
  fetch-store-data.ts     Run in prebuild
public/
  resume.pdf
```

### Quality floor

Build to these without announcing them:

- Lighthouse 95+ on all four categories, mobile profile
- LCP under 1.5s on a throttled 4G connection — the site must be fast on a Nigerian mobile network, not just on fibre
- All images through `next/image`, AVIF/WebP, explicit dimensions, no layout shift
- Visible keyboard focus states using `--signal` at a 2px offset ring. Do not remove outlines.
- Full keyboard navigability; correct heading hierarchy; real alt text on every screenshot
- Text contrast minimum 4.5:1 against `--base` — verify `--muted` passes, and darken the background rather than lightening the text if it doesn't
- `prefers-reduced-motion` honored throughout
- Responsive from 320px up. The Ledger rail collapses to a sticky top strip below 1024px.
- Semantic HTML. Ledger rows are anchors, not click-handled divs.

### SEO and metadata

- Per-page metadata via the Next.js Metadata API
- OG images generated with `next/og` — dark, using the ledger record format so shared links look like system records
- `Person` and `CreativeWork` JSON-LD
- `sitemap.ts` and `robots.ts`

### Analytics

Vercel Analytics only. No third-party trackers, no cookie banner needed.

---

## 7. Working agreement

- **Do not invent content.** No placeholder case study text, no fabricated metrics, no lorem ipsum. If real content for a section is missing, build the component and leave a clearly marked `TODO(content)` — a portfolio with invented numbers is worse than one with fewer sections.
- **Do not add sections not specified here** without asking. Scope creep is how v1 fails to ship.
- Ask before adding any dependency beyond those listed in section 6.
- Prefer server components. Reach for `"use client"` only where interaction genuinely requires it.
- Every component you build should be checked against the anti-pattern list in section 2 before it's considered done.

## 8. Open items — resolve before launch

- [ ] Client permission for the Albis Care security incident study
- [ ] Confirm which apps are live and under which developer accounts
- [ ] Real screenshots for all three case studies and every listed app
- [ ] GitHub and LinkedIn profile URLs
- [ ] Current resume PDF placed at `public/resume.pdf`
- [ ] Decide the availability status shown in the Ledger rail
- [ ] Confirm any NDA constraints on Twale / Next Digital Solutions

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
