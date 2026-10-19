# Bolade Olayode — engineering portfolio

A responsive, server-rendered portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and local MDX case studies. The current visual direction is ivory, charcoal, and cobalt, with editorial project stories and an authentic portrait.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Edit content

| Content | Location |
| --- | --- |
| Identity, email, socials, résumé, canonical domain | `lib/site.ts` → `site` |
| Availability indicator | `lib/site.ts` → `site.available` (false until confirmed) |
| Project names, categories, decision summaries, diagrams, optional live/repository links | `lib/site.ts` → `projects` |
| App cards and optional App Store / Google Play URLs | `lib/site.ts` → `apps` |
| Expertise, philosophy, experience | `lib/site.ts` → respective arrays |
| Approved recommendations | `lib/site.ts` → `testimonials`; empty means no section |
| Case-study metadata and prose | `content/work/*.mdx` |
| Hero and about editorial copy | `app/page.tsx` |
| Design tokens, responsive layouts, interaction styles | `app/globals.css` |
| Portrait and résumé | `public/portrait.png`, `public/bolade-olayode-resume.pdf` |

To add a project, copy an MDX file, use a unique slug and record ID, set `order`, and add a matching entry in `projects` in `lib/site.ts`. Follow Problem → Constraints → Engineering decisions → Implementation → Results → Lessons. Only claim verified outcomes. `order` determines display order.

### Replace visual placeholders

The project visuals are **explicitly labeled simplified architecture diagrams**, based on existing write-ups. They are not product screenshots. To replace one, put an approved screenshot in `public/work/<slug>/`, then set `screenshot: '/work/<slug>/screen.webp'` and an accurate `screenshotAlt` on its entry in `lib/site.ts`. The image uses Next.js image optimization. Use a suitably cropped 4:3 image; never include private customer data.

Add `liveUrl` or `githubUrl` only when public access is permitted. Missing links are omitted. Replace all `TODO(content)` paragraphs with actual project details before release. No fabricated testimonials or placeholder performance statistics are used.

App cards currently use explicitly labeled placeholders. Replace each entry in `apps` with the real name, description, and store URLs. Missing URLs display “Link pending” without a clickable destination.

### Publication gates

Albis Care's incident narrative requires client approval. Twale details require NDA review. The current case studies retain clearly visible notes about these requirements. If anonymizing, update **all** content and configuration, not only `clientAnonymized`. Confirm profile links and PDF contents. The deployed domain is configured in `site.url`; update it if needed before publishing.

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
