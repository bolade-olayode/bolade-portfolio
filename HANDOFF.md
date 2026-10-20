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

Real project narratives: Albis Care, Twale, FoodBank CRM. Existing owner-provided claims have not been independently verified.

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

Removed Apps from the shared top navigation at owner request. The same AppShelf component remains on the homepage and now also appears on `/portfolio` between platforms and websites. Portfolio layout uses full-width section bands with inner containers, avoiding nested container widths so the app shelf matches homepage dimensions, copy, real icons, statuses, and Play Store links. Portfolio app band retains the ivory/grid styling.


## AI / automation and custom plugin portfolio — latest content

Owner supplied four automation projects and custom PHP plugins. Read-only review of sibling local repos `job-agent`, `Finance-tracker`, and `AI-Agent` informed summaries; no API calls, tool executions, installs, private data reads, or changes to those repos. Public legal-publishing repository README reviewed: https://github.com/bolade-olayode/automated-case-reporting-system . It contains Apps Script; Python processing stage and python-docx/PyPDF2 plus 80% manual-processing reduction are owner-supplied, not independently benchmarked. Link is labeled “View publishing script”.

Active content is in `lib/automations.ts`. Portfolio `AutomationPortfolio.tsx` lists legal document pipeline, job search agent (pre-filtering, Claude scoring, SQLite, review UI), finance tracker (Telegram, deterministic arithmetic, Claude interpretation/classification, SQLite and optional Sheets sync implementation), and sports betting agent (Chrome extension/WebSocket/Claude; checked-in paper-mode default, no profitability/deployment claims). Finance README is older than source: actual bot wires SQLite and Sheets sync, so descriptions follow source rather than claiming mock-only status.

Owner described custom plugins: Legal Digital NG chat UI with RAG/vector retrieval and OpenAI GPT-4 fallback when no suitable match; year/first-letter custom post taxonomies used in a case dashboard; WooCommerce pending bank-transfer orders, receipt upload, admin notification, and manual confirmation. These examples are shown under `/portfolio#plugins`, with explicit distinction between upload and payment confirmation. Taxonomy source URL supplied and linked: https://github.com/bolade-olayode/WordPress-custom-taxonomy (browsing fetch unavailable). No vector database vendor or unspecified plugin capabilities invented.

Homepage highlights legal pipeline, job agent, finance tracker, and legal AI assistant, linking to portfolio anchors. The diagram now shows Python, Claude API, OpenAI API, Apps Script, WordPress, and Telegram, explicitly labeled as tools across separate projects. About and expertise mention automation and custom PHP plugins. Existing platform/app layouts retained. Validation: lint, TypeScript, whitespace checks, and webpack production build passed. Browser visual/device QA remains pending.

Owner requests no explicit plugin totals in any copy. Removed the numeric portfolio badge, count field, and counted wording from About, plugin descriptions, and documentation. Refer to “custom WordPress plugins” without specifying a total.


## Merged engineering section — owner approved

Replaced the homepage's separate automation and “Where I can help” sections with `EngineeringSection.tsx` after apps. Heading: “Different challenges. One engineering mindset.” Four pillars in `lib/site.ts` cover full-stack engineering, web/mobile, systems/infrastructure, and AI/automation. `engineeringTechnologies` lists only confirmed project technologies; Flutter/PostgreSQL omitted. Compact full-stack hub diagram connects frontend, backend APIs, mobile, cloud/operations, databases, integrations, and AI/automation, with a simplified-diagram caption. At <=800px it becomes a readable grouped grid. Selected engineering solutions below retain the legal pipeline (owner-supplied 80% result), job agent, finance tracker, and legal AI assistant. No explicit plugin totals. `#expertise` identifies the section, `#automations` remains on the selected-solutions area for old anchors. Existing blue band/grid background retained. Old AutomationFlow is unused reference code. Portfolio project narratives are unchanged.


## Five-photo About stack and viewer

Owner requested overlapping photos with click-to-open, then explicitly chose five photos by restoring the golden-hour running image. `AboutPhotoStack.tsx` is the small client component; `lib/about-photos.ts` holds selection/order/alt text/dimensions. Current selection: existing race-day photo, IMG_0696 everyday portrait, _MG_0974 group photo, IMG_2045 medal photo, and Golden Hour Urban Runner training portrait. Optimized derivatives in `public/about/` preserve original uploads and total about 1.15MB. Main race card is central, everyday/medal cards behind, group below-left, training below-right. Reduced tilt on mobile; original photo captions remain omitted, About heading/text/Strava remain.

Full-size viewer uses native dialog, uncropped images, previous/next buttons and arrow keys, Escape, explicit Tab/Shift+Tab wrap, close button/backdrop, focus return, and body scroll locking. Read-only headless Chrome QA script and screenshots are under `/tmp/bolade-photo-qa.mjs` and `/tmp/bolade-photos-*.png`, not project dependencies. Browser checks passed desktop and 390px/320px: all five photos have visible click/tap targets, navigation/wraparound, Escape/close, focus return/containment, body scroll restoration, no horizontal overflow, and reduced-motion transitions off. This is targeted gallery QA, not a full-site accessibility audit.


## FoodBank CRM — current owner brief and product screenshots

Replaced active FoodBank credits/ERP copy with the owner's production food distribution brief: subscriptions, approved vendor catalogue, orders, earnings/withdrawals, and admin oversight. Homepage and portfolio use the supplied admin home screenshot with its actual aspect ratio; details include six additional member/vendor/admin screenshots, labeled and linked to full-size originals. Screens show sample/empty states; no usage metrics inferred. Regional configuration is distinguished from active geographic operations. Owner-supplied production status and engineering details have not been independently audited.

Detail page covers end-to-end ownership, three roles, web/mobile sharing a versioned Laravel API, Sanctum and role middleware, HMAC-verified Paystack webhooks, queued Resend/Expo notifications, Cloudinary, and supplied stack/hosting. Architecture distinguishes two app types from three roles rather than repeating the supplied ambiguous client count. Mobile screenshots remain pending. Historical MDX is unchanged. Shared screenshot gallery and architecture fields are optional, preserving the other project pages.

Owner then supplied two mobile sign-in screenshots (member and vendor). Added them below the web gallery in a narrower, natural-proportion mobile subsection; removed FoodBank's mobile placeholder and empty pending notes. Both screenshots open full size.


## Twale — latest architecture and delivery status

Owner supplied a replacement overview, architecture, privacy, payments, and location brief. Active Twale copy now attributes product specification through deployment to the owner as technical lead and sole engineer, for NDS through xDigital Solutions, 2025–present. Removed the old codename from tracked source and documentation. Homepage summary and detail status distinguish live backend/merchant web/ops, driver device testing, and user mobile app not started. No user-app delivery claim.

Detailed sections explain dual MySQL users/databases and grant isolation, exclusive vault service access and audit logging, owner-reported DatabaseIsolationTest, controller response minimisation plus serializer defence, public tracking without PII, OTP-gated escrow release, Paystack callback verification and cron reconciliation due to the account’s occupied webhook slot, configurable commercial settings, current/history location storage and 90-day thinning, event-based Soketi broadcasts versus HTTP polling, visible staleness, and the native background-location requirement. Supplied stack rationale includes database queue/cache because hosting lacks Redis. These are owner-provided implementation claims; backend source/tests were not independently audited. Added simplified architecture with per-client status, stack rationale table, supplied live links, and selected merchant/admin screenshots. Existing redacted admin lead retained; duplicate/browser-chrome captures omitted. Driver app images have not yet been located; asked owner for filenames.

Twale validation: lint, TypeScript via production build, and whitespace checks passed. Headless Chrome could not start (two startup timeouts), so the updated Twale visual/mobile browser checks remain unverified; do not claim those passed. Previous FoodBank browser checks concern its prior layout.


## Twale public-copy correction — supersedes earlier status and disclosure

Owner confirms BOTH user and driver mobile apps have been developed. Earlier not-started/device-testing statements are stale and must not be reintroduced. Removed Twale's detail-page tagline, metadata block, status badge, money-movement narrative, real-time/location narrative, central challenge, current stage, and detailed stack rationale. Privacy copy now uses plain language about role-appropriate access, privacy checks, and recipient tracking; no internal database/service/table/test names, grant model, payment-account constraints, or tracking internals in the active public copy. Architecture illustration now shows the connected applications at a product level. Homepage summary also reflects both developed apps. FoodBank content is separate and unchanged.

Twale web previews now open the owner-requested https://app.twale.ng in a new tab: homepage/portfolio visual and merchant gallery images. Project titles/View project keep case-study navigation. Explicit full screenshot links remain available; admin images remain full-size screenshot links.

## Twale mobile screenshots — located after re-upload

Owner re-uploaded seven clearly named JPEGs: user app home/create-delivery/track/profile and driver app home/earnings/profile. Inspected all seven and added them below the web gallery in two labeled groups. `ProductMobileGallery.tsx` renders natural-aspect static imports with full-size image links; Twale uses a capped-width three/two/one-column layout. FoodBank uses the same component while retaining its compact two-screen layout. These screenshots do not establish public app-store availability or production usage metrics. Both apps remain described as developed, per the owner’s correction.


## Twale mobile privacy redactions

Owner requested names removed, especially user home/profile. Used built-in imagegen edits for five screenshots: user home/profile/create-delivery and driver home/profile. Opaque bars/circles cover names, business identity, profile email, avatar initials/photos, and visible delivery identifiers; create-delivery phone placeholder also covered. Inspected all outputs. These are edited derivatives, not pixel-identical screenshots. WebP versions are in public/work/platforms/twale-mobile/ and both static imports and full-size links now target them. The five originals were moved out of public into ignored private-assets/twale-mobile-originals/. Unaffected earnings/tracking screenshots remain original. Four-column user layout remains intact.

Prompt set: precise-object-edit; redact identifying names, contacts, photos and identifiers with opaque coverage; preserve the full screenshot composition and unaffected UI; no added data, cropping, or phone frame. Built-in imagegen used, no API/CLI fallback.


## Public image cleanup

Moved 27 image files with no references in app/components/lib/content source into ignored private-assets/unused-public-images-2026-10-20/ (about 143 MiB). Includes superseded full website captures, original About photos now served as optimized derivatives, and duplicate/unused Twale web captures. Archive manifest records original public paths and byte sizes. All active static imports, gallery images, covers, app icons, résumé, and metadata portrait remain. Files were archived locally, not permanently deleted. Current branch remains portfolio-build; latest redaction and cleanup changes require a commit before pushing. Hosting production branch has not been verified; no push, merge, or deployment performed.


## Albis Care — curated public narrative and mobile screenshots

Replaced placeholders with the owner’s latest brief, keeping only public-relevant material: sole technical ownership since 2024, daily production use, care visits/notes, responsible authorship, role-appropriate access and client-specific family access, separate website-enquiry workflow, build/release ownership, and concise technology list. Backend is plain PHP REST API, NOT Laravel. Do not reintroduce incident details, exact permission matrix, internal schema/hook/field names, deployment commands, or implementation exceptions into public copy. No compliance certification, inspection outcome, offline support, retention improvement, or current usage metric was inferred. Historical MDX is not rendered and remains private repository context.

Three mobile screens added: sign-in, admin overview, driver workspace. Built-in imagegen opaque redactions cover sign-in email and driver name; outputs visually inspected and converted to WebP under public/work/platforms/albis-mobile/. Two originals moved to ignored private-assets/albis-mobile-originals/. Admin screen contains no individual identifiers. Captions distinguish screenshot totals from usage claims. Prompt: precise-object-edit; cover only the identifying string with an opaque bar; preserve full composition and unaffected UI. These redacted screenshots are edited derivatives. Mobile gallery uses three columns on desktop, then two/one at responsive breakpoints.

Legacy content/work/albis-care.mdx was also rewritten to match the curated public story, removing old incident claims and inaccurate WordPress permission framing. Previous version preserved only in ignored private-assets/legacy-case-studies/. This supersedes the historical-MDX note above; do not restore the old content.


VA by Ella now uses the supplied full-page screenshot as its hover/focus scrolling image at public/work/previews/va-by-ella.webp, retaining the existing static cover and image-left/text-right design. Image and Visit website link open owner-supplied https://vabyella.com/ in a new tab. Removed staticOnly. Original PNG archived under ignored private-assets/website-originals/. Shared gallery controls and reduced-motion behavior retained.

## Hiring-focused review improvements — owner approved

Added permanent /about → /#about and /contact → /#contact redirects in next.config.ts after checking installed Next docs. Hero now leads with everyday business problems, shows owner-confirmed “Open to full-time remote or hybrid roles”, and gives résumé a secondary button alongside See my work. Get in touch and navigation Let’s talk lead to Contact, where mail links remain and CopyEmail provides clipboard success feedback or manual-copy guidance when unavailable/denied. site.available is now true by explicit owner instruction.

Albis homepage/detail copy includes owner-supplied approximately 15 staff and 60+ care clients, explicitly dated August 2026. No Twale/FoodBank counts added; owner says wait for actionable details. Engineering section now leads “The work behind the claims”, presents concrete solutions before pillars/stack, and omits the decorative radial diagram. First philosophy item uses Albis care/admin responsibility example. At <=600px the header is a compact single row with all three destinations and the redundant Let’s talk CTA hidden. Photo expand controls moved to visible upper corners on all five stacked images.

Portrait already had priority; production HTML confirms an image preload. Kept empty alt text on decorative app icons and duplicate scrolling images to avoid repetitive screen-reader descriptions.

Validation: lint, webpack production build/TypeScript and whitespace checks passed. Headless Chrome /tmp/bolade-review-qa.mjs passed 1440/500/390/320 widths: no horizontal overflow, hiring actions present, compact mobile header/all links visible, all five expand icons unobscured. Copy-email success and rejected-clipboard feedback tested with browser stubs (not OS clipboard permissions), and both bare-path redirects reached their anchors. Production HTML/routes manifest independently checked for availability, dated figures, résumé button, image preload, removal of radial diagram, and 308 redirects. No deployment, commit, merge, or push performed.

## Launch preparation, custom 404, SEO discussion

Owner says ready for launch, confirms Vercel, intends to merge into main. Production Branch/domain mapping is still unverified; no commit/push/merge/deployment performed. The earlier preserve-coming-soon instruction is superseded by launch intent once the target is verified. Built a custom editorial 404 with decorative grid/large number, plain explanation, home/portfolio/contact recovery links, and noindex metadata. Added homepage canonical and Open Graph URL, author/alternate names in structured data, updated structured-data portrait to current hero, and preview-only noindex/nofollow via VERCEL_ENV. Sitemap/robots/project canonicals were already present. Production remains indexable. docs/launch-and-discovery.md records launch, Search Console, and analytics steps and current primary-source references. Analytics discussed, not installed: recommend Vercel page views/Speed Insights; Vercel custom events currently require Pro/Enterprise, so confirm plan before promising interaction events. No indexing/ranking guarantees.

404/SEO validation: lint, webpack build/TypeScript, whitespace checks passed. Verified the unknown local URL returns HTTP 404. Built HTML confirms one canonical per public page, production pages indexable, and 404 noindex/recovery links. Headless Chrome timed out at startup on both attempts, so the new 404 visual/mobile browser QA remains pending; no browser pass claimed. No analytics scripts installed and no deployment performed.
