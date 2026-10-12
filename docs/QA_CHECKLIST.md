# QA Checklist

Use this checklist for every production release. Record the date, commit, deployment URL, tester, and any exception in `docs/TEST_REPORT.md` or a release-specific report.

## Before merge or push

- [ ] Scope is understood and unrelated behavior is unchanged.
- [ ] `npm test` passes.
- [ ] `npm run test:e2e` passes in both configured Playwright projects.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] `git diff --check` passes.
- [ ] No secrets, `.env` files, Playwright artifacts, or Vercel project files are staged.

## Calculator regression

- [ ] Fuel defaults show Rs 28,000 monthly, Rs 336,000 annual, 100 L, and Rs 23.33/km.
- [ ] Fuel results update after all three inputs change.
- [ ] Empty, zero-efficiency, negative, and malformed fuel inputs show an error or withhold results.
- [ ] Ownership defaults produce two totals and one neutral lower-cost highlight.
- [ ] Three-year and five-year controls change the duration and totals.
- [ ] Resale above purchase price, empty names, invalid shared inputs, and over-limit inputs withhold results.
- [ ] Reset restores every ownership default and five-year duration.
- [ ] Phase 2 formula, exclusions, labels, and illustrative-price warnings remain unchanged.

## Content, accessibility, and responsive layout

- [ ] Homepage, both calculators, all four guides, and supporting pages load.
- [ ] One visible page-level heading describes each route.
- [ ] Form controls have usable labels, validation messages are announced, and keyboard focus is visible.
- [ ] Result changes are exposed through the existing live regions.
- [ ] Primary navigation remains usable on a narrow viewport.
- [ ] No page-level horizontal overflow occurs at the configured Pixel 5 viewport.
- [ ] Ownership breakdown remains usable in its intentional table scroll container.
- [ ] A real-device and screen-reader spot check is recorded for material UI changes.

## SEO and deployment

- [ ] Production alias returns HTTP 200 over HTTPS.
- [ ] Every indexable page has the expected absolute, self-referencing canonical.
- [ ] `/sitemap.xml` returns HTTP 200 and contains every intended content route using one origin.
- [ ] `/robots.txt` returns HTTP 200, permits crawling, and names the production sitemap.
- [ ] Search Console verification file returns HTTP 200.
- [ ] No preview-deployment or localhost origin appears in production metadata.
- [ ] Vercel production deployment corresponds to the intended git commit.

## Analytics and privacy

- [ ] `NEXT_PUBLIC_GA_ID` is present in the intended Vercel environment and is not committed.
- [ ] Production source contains one matching Google tag loader and configuration value.
- [ ] GA4 Realtime or DebugView receives a permitted test visit.
- [ ] Browser console/network shows no analytics error.
- [ ] No calculator values or vehicle names are sent in URLs or analytics payloads.
- [ ] Privacy copy matches the deployed measurement behavior.

## After release

- [ ] Production smoke checks are repeated after the alias is assigned.
- [ ] Search Console sitemap/indexing issues are reviewed when reporting updates.
- [ ] GA4 release annotation or internal release note is recorded.
- [ ] Known limitations and unverified external checks are documented rather than marked complete.
