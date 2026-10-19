# Terminal continuation handoff

Updated 19 October 2026. Read this alongside `CLAUDE.md` and `README.md`.

## Owner's latest direction

Pivot from the original cool-paper/ochre register with a sticky sidebar to a premium editorial engineering portfolio: warm ivory, charcoal, cobalt, restrained dark contact section, precise grids, clear typography, and authentic evidence of engineering judgment.

The site is for qualified engineering interviews and client enquiries. Prioritize technical credibility, meaningful project contributions, maintainability, and frictionless contact. No invented metrics, testimonials, credentials, or product screenshots. The old HTML mockup is historical reference only.

## Critical environment constraint

`boladeolayode.xyz` currently serves the owner's coming-soon page. The redesign is on a different branch and development environment. The checked-out branch when this handoff was written is `portfolio-build`.

Keep the coming-soon production site unchanged. Do not merge into production, publish this redesign, or alter domains, hosting, or environment mappings without an explicit request. Before any future push, check the branch and deployment configuration rather than assuming isolation. Hosting configuration was not verified in this session. No commit, push, or deployment was performed.

## Completed local implementation

- Replaced homepage with sticky top navigation, portrait-led hero, factual organization strip, three alternating project stories, expertise, philosophy, about/experience, contact, and footer.
- Restyled the three MDX case-study pages to match, with Problem → Constraints → Engineering decisions → Implementation → Results → Lessons.
- Added shared UI in `components/site/Chrome.tsx` and project diagrams in `components/site/SystemVisual.tsx`.
- Centralized identity, projects, capabilities, experience, principles, social links, availability, and optional testimonials in `lib/site.ts`. Hero/about prose also remains in `app/page.tsx`.
- Added SEO metadata, Person/CreativeWork JSON-LD, generated OG image, sitemap, robots, SVG icon, and a custom 404.
- Updated `CLAUDE.md` to the new direction and `README.md` with editing instructions and a release checklist.
- Kept the old rail, archive, app icon, and reveal components unused for reference.
- No dependencies added. Changes are uncommitted; inspect `git diff` and untracked files and preserve existing work.

## Evidence and placeholders

Real project narratives: Albis Care, Twale/PAKEJ, FoodBank CRM. Existing owner-provided claims have not been independently verified.

Architecture diagrams are explicitly labeled simplified illustrations, not screenshots. Add approved screenshots using each project's `screenshot` and `screenshotAlt` in `lib/site.ts`; see README. Optional live/repository links render only when supplied. Testimonials are empty and omitted; availability is false pending confirmation.

Case-study TODOs remain. Albis incident publication needs client permission; Twale details need NDA review. Existing warning notes remain visible. Anonymization requires editing title, summary, body, metadata, and visuals, not just toggling the frontmatter flag.

## Verification already performed

- `npm run lint`: passed.
- `npx tsc --noEmit --incremental false`: passed.
- `git diff --check`: passed.
- Navigation anchors and local portrait/résumé existence: checked.
- `npm run build -- --webpack`: passed; homepage, all three studies, OG image, sitemap, robots, and 404 generated.
- Default Turbopack build encountered environment restrictions: first Google Fonts network access, then CSS worker port binding. Webpack succeeded with approved network access. The package build script remains unchanged.
- No browser screenshots, visual/device testing, screen-reader audit, or Lighthouse measurements were performed. Do not claim measured performance or full accessibility compliance.

## Suggested next work

Continue from the owner's next instruction. If none is supplied, inspect the current implementation and perform desktop/mobile browser QA before further visual refinement. Verify keyboard navigation, narrow-screen overflow, zoom, contrast, portrait cropping, project visuals, actual résumé/social destinations, and email actions. Resolve content gaps with owner-supplied information. Keep all work in the development branch/environment.

## Review iteration — 19 October 2026

Owner requested more natural wording, a stronger hero, and visible mobile apps with placeholder store destinations. Homepage, shared project/capability copy, contact, and OG text have been revised. Hero keeps the real portrait with a larger, upright frame. `apps` in `lib/site.ts` contains three clearly labeled draft cards; store links render only when a URL is supplied. Apps replaces Expertise in top navigation; expertise content remains. This explicitly supersedes the earlier no-store-section direction. Real app names, contributions, icons, and URLs are still needed.

Development server is running at localhost:3000. Lint, TypeScript, and diff whitespace checks passed for this iteration. Updated homepage returned HTTP 200. No browser visual audit performed.

## Portfolio gallery direction — 19 October 2026

Owner requested removal of the hero’s lower selected-projects strip and individual case-study buttons/pages. Homepage now features four screenshot previews and links to `/portfolio`, which lists all seven owner-added website screenshots. Former `/work/[slug]` routes redirect to `/portfolio`; original MDX remains preserved as source material, and work URLs are removed from the sitemap. `lib/portfolio.ts` owns website names, preview assets, and optional live URLs. Awaiting owner-confirmed URLs before previews become external links. `WebsiteGallery.tsx` provides automatic top-to-bottom preview animation, hover/focus pause, a pause checkbox, and reduced-motion support. Optimized WebP derivatives in `public/work/previews/` preserve original uploads.

Hero now uses Archivo 800 at 96px desktop, EB Garamond introduction/subtext, owner-approved five-year experience wording, and the owner-swapped portrait2.png. Teams strip removed. Buttons/text actions use EB Garamond.

Owner clarified screenshot previews must retain the original project-row design: screenshot on the left, short copy on the right, stacked on mobile. WebsiteGallery now uses the existing project styles rather than a card grid. All seven live URLs are supplied and configured.

Reviewed all seven uploaded screenshots and wrote specific website overviews, category labels, short headlines, and visible feature tags in `lib/portfolio.ts`. These describe the websites rather than inventing implementation contributions or metrics. Restored original project panel padding, max-width and slight rotation of the inner visual, and original project copy typography; all screenshots remain on the left per owner instruction. Live-site browsing succeeded for JV Sparkling; other overviews rely on the supplied screenshots.

Dashboard redaction: built-in imagegen created reviewed redacted derivatives at `public/work/platforms/twale-dashboard-redacted.png` and `public/work/platforms/albis-care-dashboard-redacted.png`. Email addresses and record identifiers covered; Twale revenue and per-delivery amounts also covered. Originals preserved in git-ignored `private-assets/dashboard-originals/` outside public. Generated derivatives may differ slightly in rendering from the originals; do not treat as pixel-identical captures. Not yet wired into the platform presentation.


## Active platform presentation — 19 October 2026

Owner approved restoring detail pages for featured full builds. Homepage now lists Twale → FoodBank CRM → Albis Care, each with “View project” to `/work/<slug>`, followed by “View full portfolio”. `lib/platforms.ts` is the current content source; `PlatformProjects.tsx` shares the original image-left/text-right project rows. Twale and Albis use redacted dashboard derivatives; FoodBank and additional/mobile screens have explicit placeholders. Detail pages include overview, workflows, one engineering decision, screenshots, pending details, and next-project navigation. Unknown slugs return 404. `/portfolio` includes these platforms, all seven website builds, and an AI/automation placeholder. Sitemap includes the three detail pages again.

The old MDX remains preserved but is no longer rendered. Current Albis stack and outcomes need owner confirmation; historic incident details and unverified metrics are excluded. Existing client/NDA publication requirements remain in force before deployment. Website previews now start static and animate only on hover/focus or the explicit “Play scrolling previews” control; reduced motion disables animation.

Verification for the platform wiring: lint, TypeScript, whitespace checks, and `npm run build -- --webpack` passed. All three project detail routes returned HTTP 200 locally. Build generated homepage, portfolio, and all three platform detail pages. Browser visual/device QA remains pending.


## Static cover / hover screenshot pairing

Owner supplied new landscape covers. Optimized derivatives in `public/work/covers/` are mapped via `coverImage` in `lib/portfolio.ts`. Shared `ScrollPreview.tsx` displays the cover at rest, reveals/scrolls the long screenshot on image hover or keyboard focus, and resets on exit. Explicit gallery play supports touch; reduced motion keeps the cover visible. Platform detail pages retain full static screenshots. Dashboard cover uploads exposed previously-redacted values/accounts, so they were preserved in ignored `private-assets/dashboard-originals/`; existing redacted screenshots provide their static top-cropped covers and scrolling variants. FoodBank is still a placeholder. No separate public Albis website cover supplied, so its existing screenshot provides the initial top crop. VA by Ella is added as static-only, awaiting its URL and long screenshot.

Owner supplied `twale-preview.png` and `albiscare-new-preview.png` and clarified dashboards belong only on detail pages. Optimized landing covers now live at `public/work/covers/twale-landing.webp` and `albis-care-landing.webp`. `coverImage`/`previewImage`/`previewAlt` in `lib/platforms.ts` are separate from detail `screenshot` fields. Albis hover uses its existing long public-website capture; Twale stays static because no long landing-page screenshot is supplied. Redacted dashboards are rendered only on detail pages. Public Albis website entry also uses the new landing cover.

Homepage now has a fourth featured row: Aura by Nimi, after the three platforms. It uses the existing website preview/live-link behavior; platform rows keep their detail links. Section copy reflects the mix. Preview frames now derive height from actual cover dimensions via static imports in `lib/preview-images.ts`; fixed 4:3 cropping and surrounding panel padding are removed for screenshot previews. The long screenshot remains an absolute overlay, so hovering does not change frame height. FoodBank retains its labeled placeholder.

## Updated Twale brief — owner supplied

Twale now uses the owner's latest brief in `lib/platforms.ts`: shared Laravel backend, React merchant web applications, React Native merchant/mobile and native driver apps, admin console, background GPS and local synchronisation, collection-code handoffs, delivery state machine/event history, PII vault, payment reconciliation, wallet earnings and withdrawals. Homepage summary establishes ownership across the build. Detail page adds contribution, four-step delivery journey, four audiences, four engineering decisions, central challenge, current stage, and full supplied technology stack. Non-technical explanations accompany implementation details. Stage is core workflows implemented with reliability/tracking/end-to-end validation ongoing; no invented production metrics or completion claims.

Replaced stale GPS-deferred/PWA-only Twale descriptions in active configuration and homepage principles. Old MDX stays historical and is not rendered. Added optional narrative fields to PlatformProject so other project pages retain their existing content and layout. Twale's missing-content notes now concern remaining screenshots rather than architecture/roles supplied in this brief.

## Reference-inspired app shelf and automation flow

Owner supplied app icon-row and automation-diagram references. Added `AppShelf.tsx`: compact icons/names above selected projects, using existing placeholder app data and optional `icon` paths in `lib/site.ts`. Real store destinations render as links when supplied; missing stores remain clearly pending. Added `AutomationFlow.tsx` after selected projects: four explanatory concepts and a responsive hub diagram connecting inputs, data, connected apps, human review, and outputs. Diagram is explicitly illustrative, not a claim of a completed automation project or tool-specific experience. Uses inline SVG/CSS, no dependencies, gentle connector animation, and reduced-motion support. Existing ivory/cobalt palette retained. Actual app identities, icons, store URLs, and automation project/tool details remain pending.

Latest layout adjustment: app shelf moved below selected projects and before the automation section. Its container uses two columns: compact app icons/heading on the left, short mobile-development introduction on the right, stacked at narrower widths. Shared button/action typography is now 16px EB Garamond.

App shelf now uses the owner-supplied Albis Care, FoodBank CRM, and Meetpie icons and names, replacing generic app placeholders. Store URLs are still unconfirmed, so no platform availability is assumed; each shows “Store links coming soon”. Albis transparent icon is contained with padding; the other supplied icons fill their tiles. Apps section vertical padding reduced to 56px desktop/40px mobile, and heading/icon spacing tightened.

App publishing status updated from owner-provided links: Albis Care and FoodBank CRM icons and Google Play labels open their supplied Play Store URLs in new tabs. Meetpie is labeled “Internal testing” without a public link. Twale added using `public/twale-favicon.png`, labeled “Coming soon”. Generic “Store links coming soon” copy removed. Four icons fit one desktop row, with a two-column arrangement on narrow phones. App data/status lives in `lib/site.ts`.

Homepage sections now use full-width muted background bands: selected projects warm stone, apps ivory, automation pale blue, expertise cream, about pale sage, and existing dark contact. Hero and philosophy retain the subtle body grid. Added inner container wrappers for selected work, automation, and philosophy to preserve original content widths/grids while extending backgrounds to viewport edges. Section colors are scoped to `.homepage`; project detail and portfolio pages retain their existing styling. App introduction uses the owner-approved standalone/mobile-platform wording.

About section now includes owner-supplied `public/running-bolade.PNG` beneath the heading, preserving its proportions, plus the approved personal paragraph stating ultrarunning and three completed marathons. “Follow my runs on Strava” links to the owner-supplied URL in `site.strava`, opening in a new tab. These are owner-provided biographical claims; no additional race results or distances were inferred.
