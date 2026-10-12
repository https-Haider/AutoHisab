# Implementation Log

## 12 October 2026 — Phase 2

### Pre-implementation audit

- Confirmed a clean `main` branch and reviewed the App Router architecture, shared layouts, calculator utility/component split, Node test setup, Tailwind design tokens, metadata, sitemap, robots, contact configuration, and existing guide routes.
- Baseline results before edits: 9 tests passed; lint passed; typecheck passed; production build passed and generated 12 application/endpoints plus the not-found route.
- Confirmed the canonical default origin is `https://autohisab.vercel.app` and can be replaced with a valid `NEXT_PUBLIC_SITE_URL` origin.

### Modified implementation

- `src/lib/ownership-calculations.ts`: pure, validated ownership and comparison calculations.
- `src/lib/ownership-calculations.test.ts`: coverage for fuel, depreciation, totals, 3/5-year periods, zero optional costs, comparisons, invalid ranges, and decimal consistency.
- `src/components/ownership-calculator.tsx`: responsive interactive comparison, validation, reset, chart, breakdown table, and result summary.
- `src/app/car-ownership-cost-calculator/page.tsx`: metadata, calculator route, methodology, example, limitations, and internal links.
- `src/app/guides/total-car-ownership-cost-pakistan/page.tsx`: original supporting guide.
- `src/components/header.tsx`, `src/components/footer.tsx`, `src/components/guide-layout.tsx`, and `src/app/page.tsx`: navigation and internal-link updates.
- `src/app/sitemap.ts`: added both Phase 2 routes.
- `README.md` and `docs/*.md`: Phase 2 operating, calculation, SEO, test, and handoff documentation.

### Major decisions

- No charting or form dependency was added. The chart uses semantic result data and CSS-sized segments.
- Resale value is constrained to purchase price in this simplified depreciation model. Appreciation requires a different model and explanation.
- Positive annual distance, fuel price, purchase price, and fuel efficiency are required. Recurring and optional expenses may be zero.
- Inputs have explicit planning limits to reject accidental or unreasonable magnitudes.
- No structured-data block was added because ordinary page metadata and visible content describe these routes accurately without stretching a schema type.

### Test outcomes

The final command results and deployment verification are in `docs/TEST_REPORT.md`.

### Deployment

- Commit `78ca906` was pushed to `origin/main`.
- Vercel production deployment `autohisab-r4jc04hlb-dochaiderhunjra-gmailcoms-projects.vercel.app` completed and was aliased to `https://autohisab.vercel.app`.
- Both Phase 2 routes returned HTTP 200 at the production alias with the expected title and canonical URL; sitemap and robots also returned HTTP 200.

## 12 October 2026 — Google Analytics configuration

- Added a root-layout Google Analytics integration using Next.js `Script` with `afterInteractive` loading.
- The integration renders only for a valid `NEXT_PUBLIC_GA_ID` value beginning with `G-`; no identifier is hardcoded.
- Updated the privacy policy, README, and project status to accurately disclose optional analytics.
