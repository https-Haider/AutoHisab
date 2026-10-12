# Project Status

Last updated: 12 October 2026

## Current phase

Phase 3 is implemented. AutoHisab retains the Phase 2 fuel and ownership calculators and four educational guides, with browser regression coverage and operating plans for search, analytics, SEO, QA, and release handoff.

## Finished features

- Fuel cost estimates from monthly distance, km/L, and an editable petrol price.
- Three-year and five-year Vehicle A versus Vehicle B comparison.
- Ownership totals covering depreciation, fuel, maintenance, insurance, taxes/fees, and optional one-time costs.
- Monthly, per-kilometre, difference, composition-chart, and table results.
- Input validation, reset behavior, illustrative defaults, mobile layouts, and accessible labels/errors.
- Unique metadata and canonicals, sitemap and robots endpoints, internal links, and server-rendered explanatory content.
- Optional Google Analytics loading through a validated `NEXT_PUBLIC_GA_ID` environment variable.
- Guides for fuel average, petrol budgeting, petrol/hybrid comparisons, and total ownership cost.
- Playwright coverage for calculator interactions, guide rendering and canonicals, sitemap/robots output, desktop Chromium, and Pixel 5 mobile viewports.
- Search Console, analytics, SEO opportunity, QA, and Phase 3 handoff documentation.

## Unfinished items and known limitations

- The ownership calculator is intentionally a simplified cash-purchase model; it does not model financing, inflation, opportunity cost, or unpredictable repairs.
- Default values are illustrative. AutoHisab has no live fuel-price or vehicle-price feed.
- Automated viewport testing does not replace real-device, screen-reader, Search Console, or GA4 account verification; those remain explicit release checks.
- A support email appears only when `NEXT_PUBLIC_SUPPORT_EMAIL` contains a valid configured address. WhatsApp remains the published fallback.
- Google Analytics remains disabled when `NEXT_PUBLIC_GA_ID` is absent or malformed.

## Deployment status

Phase 3 is deployed to `https://autohisab.vercel.app`. Final commit, endpoint, canonical, sitemap, robots, and analytics-source evidence is recorded in `docs/TEST_REPORT.md`.

## Next priorities

1. Complete Search Console ownership/sitemap submission and record GA4 Realtime receipt with the product-owner accounts.
2. Establish a four-week search and calculator-engagement baseline before choosing content or conversion targets.
3. Consider financing only as a separately specified future feature; do not mix it silently into the cash model.
