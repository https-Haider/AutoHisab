# Test Report

Test date: 12 October 2026

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

A dedicated narrow mobile-device visual pass is not automated; responsive CSS and overflow behavior were reviewed, but real-device rendering remains recommended.

## Google Analytics integration

- `npm test`: PASS — 16 tests, 0 failures.
- `npm run lint`: PASS.
- `npm run typecheck`: PASS.
- `NEXT_PUBLIC_GA_ID=G-TEST123456 npm run build`: PASS.
- Built output contained the expected Google tag URL and `gtag` configuration for the test measurement ID.
- The integration returns no scripts when the variable is missing or does not match the GA4 `G-...` format.
- At verification time, `vercel env ls` reported no environment variables for the linked `autohisab` project. Production analytics therefore remains dependent on configuring `NEXT_PUBLIC_GA_ID` in that exact project and redeploying.
