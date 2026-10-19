# Bolade Olayode — engineering portfolio

A responsive, server-rendered portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and local MDX case studies. The current visual direction is ivory, charcoal, and cobalt, with editorial project stories and an authentic portrait.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Featured platforms and portfolio

The homepage features Twale, FoodBank CRM, and Albis Care in that order, followed by Aura by Nimi as a website project. `lib/platforms.ts` owns their summaries, screenshots, workflow notes, placeholders, and detail-page content. Platform rows link to `/work/<slug>`; Aura by Nimi links to its live store. The “View full portfolio” link leads to `/portfolio`, with platforms, all seven websites, and a clearly labeled AI/automation placeholder.

Website names, overviews, images, and live URLs live in `lib/portfolio.ts`. Each preview uses a separate static `coverImage` where supplied, then reveals its long screenshot on image hover or keyboard focus. Leaving the preview restores the cover and resets scrolling. The “Play scrolling previews” checkbox also works on touch devices. Reduced-motion preferences stop animation. Website previews link directly to the live sites; platform previews link to detail pages.

Reviewed redacted dashboard derivatives live in `public/work/platforms/`. Unredacted originals are preserved in git-ignored `private-assets/dashboard-originals/` and must stay outside `public`. FoodBank’s dashboard and additional mobile screens are labeled placeholders until supplied. The legacy MDX narratives remain historical sources; the active platform pages use `lib/platforms.ts` and exclude outdated incident details and unconfirmed metrics.

## Edit content

| Content | Location |
| --- | --- |
| Identity, email, socials, résumé, canonical domain | `lib/site.ts` → `site` |
| Availability indicator | `lib/site.ts` → `site.available` (false until confirmed) |
| Project names, categories, decision summaries, diagrams, optional live/repository links | `lib/site.ts` → `projects` |
| App cards and optional App Store / Google Play URLs | `lib/site.ts` → `apps` |
| Expertise, philosophy, experience | `lib/site.ts` → respective arrays |
| Approved recommendations | `lib/site.ts` → `testimonials`; empty means no section |
| Featured platform metadata and detail-page copy | `lib/platforms.ts` |
| Legacy case-study source material | `content/work/*.mdx` |
| Hero and about editorial copy | `app/page.tsx` |
| Design tokens, responsive layouts, interaction styles | `app/globals.css` |
| Portrait and résumé | `public/portrait.png`, `public/bolade-olayode-resume.pdf` |

To add a featured platform, add an entry to `platformProjects` in `lib/platforms.ts`. Array order controls the homepage, portfolio, and next-project navigation. Add website-only projects to `portfolioSites` in `lib/portfolio.ts`.

### Replace visual placeholders

Add approved, redacted screenshots under `public/work/platforms/`, then set the platform’s `screenshot`, `screenshotAlt`, and `screenshotCaption`. A missing screenshot renders a labeled placeholder. Describe only confirmed workflows, contributions, and outcomes. Mobile and additional product screens can be added to the detail-page gallery as they become available.

The compact app shelf in `components/site/AppShelf.tsx` currently uses explicitly labeled placeholders. Set each app’s optional `icon` in `lib/site.ts` to an approved icon asset. Replace each entry in `apps` with the real name, description, and store URLs. Missing URLs display “Link pending” without a clickable destination.

### Publication gates

Client clearance is still required before publication; Twale details require NDA review. The historical Albis incident narrative is not rendered by the active pages. If anonymizing, update titles, summaries, bodies, metadata, and visuals throughout. Confirm profile links and PDF contents. The deployed domain is configured in `site.url`; update it if needed before publishing.

The homepage automation diagram is an illustrative concept in `components/site/AutomationFlow.tsx`, not a completed project. Replace its generic content with owner-supplied project and tool details when available.

## Design and checks

See `CLAUDE.md` for the current design system. The historical `portfolio-mockup.html` and old rail/archive/app components are retained as references; the live pages use `components/site/`.

```sh
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

### Final release checklist

- [ ] **Accessibility:** keyboard navigation, skip link, visible focus, screen-reader reading order, 200–400% zoom, 320px viewport, touch targets, and reduced-motion preference checked in a browser.
- [ ] **Performance:** mobile Lighthouse on production; measure LCP, CLS, and INP. Target 95+ Lighthouse where achievable; scores have not been certified.
- [ ] **Content:** client permissions, factual claims, portrait, résumé, links, current availability, and screenshots confirmed; TODOs resolved.
- [ ] **Conversion:** email CTAs open the correct mailbox, résumé loads, social profiles resolve, project routes work, no dead-end product links.
- [ ] **SEO:** deployed canonical domain, sitemap, robots, generated OG image, and structured data checked.

No analytics, contact-form backend, new packages, or external hosting changes are introduced. Direct email handles enquiries.
