# Project Status

Last updated: 12 October 2026

## Current phase

Phase 2 is implemented. AutoHisab provides a fuel-cost calculator, a two-vehicle ownership-cost comparison, four educational guides, and supporting editorial pages.

## Finished features

- Fuel cost estimates from monthly distance, km/L, and an editable petrol price.
- Three-year and five-year Vehicle A versus Vehicle B comparison.
- Ownership totals covering depreciation, fuel, maintenance, insurance, taxes/fees, and optional one-time costs.
- Monthly, per-kilometre, difference, composition-chart, and table results.
- Input validation, reset behavior, illustrative defaults, mobile layouts, and accessible labels/errors.
- Unique metadata and canonicals, sitemap and robots endpoints, internal links, and server-rendered explanatory content.
- Guides for fuel average, petrol budgeting, petrol/hybrid comparisons, and total ownership cost.

## Unfinished items and known limitations

- The ownership calculator is intentionally a simplified cash-purchase model; it does not model financing, inflation, opportunity cost, or unpredictable repairs.
- Default values are illustrative. AutoHisab has no live fuel-price or vehicle-price feed.
- No automated browser or device test suite is configured. Unit tests cover calculation logic; manual responsive and assistive-technology checks remain part of release QA.
- A support email appears only when `NEXT_PUBLIC_SUPPORT_EMAIL` contains a valid configured address. WhatsApp remains the published fallback.

## Deployment status

Phase 2 was deployed to `https://autohisab.vercel.app` on 12 October 2026. Both new routes, sitemap, and robots returned HTTP 200 after deployment, and the production alias served the expected canonical metadata.

## Next priorities

1. Observe real user feedback on input clarity and scenario ranges.
2. Add browser-level interaction and accessibility tests.
3. Consider financing only as a separately specified Phase 3 feature; do not mix it silently into the cash model.
