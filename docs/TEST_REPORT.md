# Test Report

Test date: 12 October 2026

## Phase 3 release checks

- `npm test`: PASS — 16 tests, 0 failures.
- `PLAYWRIGHT_USE_SYSTEM_CHROME=1 npm run test:e2e`: PASS — 15 tests passed across desktop Chromium and Pixel 5 emulation; one desktop-project skip is intentional because the overflow loop is mobile-only.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `npm run build`: PASS — exercised by Playwright's clean production-build web server and separately during release validation.
- `git diff --check`: PASS.

The local machine's installed stable Google Chrome was used through Playwright because the Playwright-managed Chromium download was not yet cached. The committed default remains Playwright Chromium after running `npx playwright install chromium`; `PLAYWRIGHT_USE_SYSTEM_CHROME=1` is an explicit local fallback.

## Phase 3 browser coverage

- Fuel calculator: default result, recalculation after three input changes, zero-efficiency validation, and invalid-state result removal.
- Ownership calculator: default comparison, lower-cost indication, three/five-year state, resale-above-purchase validation, invalid-state result removal, and full reset.
- Guides: all four routes, visible page heading, absolute self-canonical, related navigation, and calculator link.
- Metadata endpoints: sitemap contains both calculators and all four guides; robots advertises the production sitemap.
- Mobile viewport: homepage, both calculators, and all four guides retain primary navigation and produce no page-level horizontal overflow under Pixel 5 emulation.

The Playwright server uses a production build on port 3100 so it cannot silently reuse an unrelated development server on the common port 3000. This also exercises hydration in a release-like runtime.

## Phase 3 production verification

The linked Vercel project is `autohisab`. Before the Phase 3 push, the production alias returned HTTP 200 and served the expected fuel-calculator canonical. `vercel env ls` confirmed `NEXT_PUBLIC_GA_ID` is configured for Production, and deployed source contained the matching Google tag loader/configuration for `G-NY2QJKW9ZH`.

After the Phase 3 push, the production alias, all content routes, self-canonicals, sitemap, robots, Search Console verification file, and analytics source are rechecked. Final pushed/deployment evidence is recorded below.

- Production origin: `https://autohisab.vercel.app`
- Deployment result: PASS — production alias served the Phase 3 revision.
- Route status: PASS — homepage, both calculators, four guides, four supporting pages, sitemap, robots, and verification file returned HTTP 200.
- Canonicals: PASS — all 11 content routes used the production origin and expected path.
- Sitemap: PASS — all 11 intended content routes were present and no localhost/preview origin was present.
- Robots: PASS — crawling allowed and production sitemap advertised.
- Analytics configuration: PASS — one `G-NY2QJKW9ZH` loader and matching configuration were present in deployed source.
- External account verification: NOT CLAIMED — Search Console ownership/sitemap acceptance and GA4 Realtime ingestion require the relevant Google account.

## Baseline before Phase 2

- `npm test`: PASS — 9 tests.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `npm run build`: PASS — all existing static routes generated.

## Final automated checks

- `npm test`: PASS — 16 tests, 0 failures.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `npm run build`: PASS — 14 application/endpoints plus the not-found route generated; both Phase 2 routes are static.

## Unit coverage

The Node test suite covers fuel calculations, number parsing, site-origin normalization, ownership fuel cost, depreciation, recurring and one-time costs, totals, monthly and per-kilometre consistency, 3/5-year duration, zero optional costs, comparison difference/tie behavior, invalid input, range limits, and decimal arithmetic.

No coverage-percentage tool is configured, so no percentage is claimed.

## Manual checklist

- [x] Calculator route renders in a desktop browser with labelled form controls and results.
- [x] Example values produce a comparison and composition chart.
- [x] Three-year and five-year controls update recurring totals and can change the lower-cost result.
- [x] Empty, zero-required, negative, over-limit, and resale-over-purchase validation is covered by implementation review and unit tests.
- [x] Zero optional/recurring costs remain valid in unit tests.
- [x] Reset restores all illustrative values.
- [x] Lower total is highlighted without claiming a better vehicle.
- [x] Breakdown table has a labelled caption and a narrow-screen horizontal overflow container.
- [x] Homepage, header, footer, guide, calculator, sitemap, and canonical links were reviewed in the built output.

## Unresolved verification

The pre-Phase-2 production routes `/`, the fuel calculator, all three existing guides, `/about`, `/contact`, `/privacy`, `/methodology`, `/sitemap.xml`, and `/robots.txt` returned HTTP 200 before deployment. The fuel calculator canonical and Open Graph URL used `https://autohisab.vercel.app`; robots advertised the same-origin sitemap. Production had no valid support email configured and correctly showed the WhatsApp fallback.

After deployment, `/car-ownership-cost-calculator`, `/guides/total-car-ownership-cost-pakistan`, `/sitemap.xml`, and `/robots.txt` returned HTTP 200. The new calculator and guide served their unique titles and correct same-origin canonicals, and both URLs appeared in the production sitemap.

A narrow mobile viewport pass is now automated in Phase 3. Real-device and assistive-technology checks remain recommended because emulation does not reproduce every browser, operating-system, input, or screen-reader behavior.

## Google Analytics integration

- `npm test`: PASS — 16 tests, 0 failures.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `NEXT_PUBLIC_GA_ID=G-TEST123456 npm run build`: PASS.
- Built output contained the expected Google tag URL and `gtag` configuration for the test measurement ID.
- The integration returns no scripts when the variable is missing or does not match the GA4 `G-...` format.
- Phase 2 initially had no configured Vercel variable. By the Phase 3 release, `vercel env ls` confirmed `NEXT_PUBLIC_GA_ID` for Production and deployed source used `G-NY2QJKW9ZH`. GA4 Realtime receipt remains an external-account check.
