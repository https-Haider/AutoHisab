# SEO Audit

Audit date: 12 October 2026

## Canonical origin

`NEXT_PUBLIC_SITE_URL` supplies the origin after URL validation. The safe default is `https://autohisab.vercel.app`. All page canonicals are relative to the shared `metadataBase`, while sitemap and robots use the same normalized origin.

## Indexable routes

- `/` — homepage; canonical `/`.
- `/fuel-cost-calculator-pakistan` — unique calculator title/description/canonical.
- `/car-ownership-cost-calculator` — unique comparison title/description/canonical.
- `/guides/how-to-calculate-fuel-average` — unique guide metadata/canonical.
- `/guides/monthly-petrol-expense-pakistan` — unique guide metadata/canonical.
- `/guides/petrol-vs-hybrid-cost-pakistan` — unique guide metadata/canonical.
- `/guides/total-car-ownership-cost-pakistan` — unique guide metadata/canonical.
- `/about`, `/contact`, `/privacy`, `/methodology` — unique metadata/canonicals.
- `/sitemap.xml` and `/robots.txt` — generated framework metadata routes.

Every listed content route is included in the sitemap. Robots permits crawling and advertises the canonical sitemap URL.

## Content and internal linking

The ownership calculator includes server-rendered methodology, a worked example, limitations, and links to relevant calculators/guides. It is linked from the homepage, main navigation, footer, and guide sidebar. The supporting guide links back to the calculator and related fuel resources.

## Structured data

No new structured data is emitted. This avoids asserting ratings, prices, products, FAQs, or application details that are not supported by the visible content. Standard metadata, headings, semantic content, and internal links are present.

## Indexing considerations and issues

- Illustrative defaults are labelled and must not be interpreted as live price content.
- The site uses static rendering, so core explanatory copy is available without client JavaScript; interactive results require JavaScript.
- A future domain change requires updating `NEXT_PUBLIC_SITE_URL` before deployment and verifying canonical, Open Graph, sitemap, and robots output.
- Post-deployment checks confirmed HTTP 200 for both Phase 2 routes, sitemap, and robots. The new titles and same-origin canonicals rendered correctly, and both routes appeared in the production sitemap.
