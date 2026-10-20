# Portfolio launch and discovery

## Current implementation

- Canonical production domain: https://boladeolayode.xyz
- Homepage, portfolio, and project pages have canonical URLs and page descriptions.
- Sitemap: https://boladeolayode.xyz/sitemap.xml
- Robots file: https://boladeolayode.xyz/robots.txt
- Person and project structured data, social previews, and portrait preload exist.
- Vercel preview builds render noindex/nofollow via VERCEL_ENV. Production remains indexable.
- Missing pages have a custom recovery page and noindex metadata.
- /about and /contact redirect to the homepage sections.

## Publish through Vercel

Owner confirms Vercel hosting and intends to merge portfolio-build into main. Confirm the project's Production Branch is main before merging; the current Vercel branch/domain mapping has not been inspected. Commit the reviewed code/assets/removals, then merge and deploy. Do not publish ignored private-assets. This document records a proposed launch path; no merge or deployment has happened.

After deployment, check the canonical HTTPS domain, homepage and case studies, robots/sitemap, unknown-path HTTP 404, /about and /contact redirects, résumé, and social preview. Production HTML must not contain preview noindex metadata. Confirm other hostnames redirect to the canonical domain rather than serving duplicate pages.

## Google Search Console

1. Add the domain property boladeolayode.xyz and verify ownership using Google's supplied DNS TXT record.
2. Submit sitemap.xml for the live domain.
3. Inspect the homepage, /portfolio, and three project URLs; request indexing after launch.
4. Review Page indexing and Performance reports over time, especially searches for the owner's name and relevant engineering work.

Search Console reports Google search visibility. A sitemap or request to index does not guarantee indexing, a ranking, or an indexing date. Useful project content and relevant links to the portfolio support discoverability; do not add fabricated metrics or keyword-stuffed copy.

Sources:
- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## Analytics proposal — not installed yet

Start with Vercel Web Analytics for page views/referrers and Speed Insights for real-visitor performance. Enable the services in the project dashboard and install their Next.js integrations only after choosing the setup and reviewing the account's usage limits. Analytics does not directly improve Google ranking.

Potential interaction events: resume_click, contact_click, email_copy_success, project_open, external_site_click. These measure actions rather than assuming an email was sent or a resume downloaded. Use fixed labels/project slugs rather than personal information or arbitrary query strings.

Vercel custom events currently require Pro or Enterprise according to its documentation. If custom conversion tracking is needed without that upgrade, discuss GA4 as an alternative before implementing another analytics service. No analytics identifiers, scripts, or event trackers have been added in this iteration.

Sources:
- https://vercel.com/docs/analytics/quickstart
- https://vercel.com/docs/analytics/privacy-policy
- https://vercel.com/docs/analytics/custom-events
- https://vercel.com/docs/speed-insights
