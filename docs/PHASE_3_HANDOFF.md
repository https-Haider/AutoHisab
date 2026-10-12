# Phase 3 Handoff

Handoff date: 12 October 2026

## Outcome

Phase 3 adds browser-level regression coverage and the operating documentation needed to measure, index, review, and safely release AutoHisab. It does not change either calculator's formulas, defaults, validation rules, content, or Phase 2 interaction design.

## Delivered

- Playwright test infrastructure with desktop Chrome and Pixel 5 viewport projects.
- Interaction tests for the fuel-cost and ownership-cost calculators.
- Rendering, canonical, and related-navigation tests for all four guides.
- Sitemap and robots assertions covering both calculators and all guides.
- Mobile viewport checks for the homepage, both calculators, and all guides, including page-level horizontal overflow detection.
- Search Console setup instructions, an analytics plan, prioritised SEO opportunities, and a reusable QA checklist.
- Updated project status, test report, and README.

## Run the release checks

```bash
npm install
npx playwright install chromium
npm test
npm run test:e2e
npm run lint
npm run typecheck
npm run build
```

The Playwright configuration starts the Next.js development server automatically. Generated reports and test artifacts are ignored by git; open the most recent HTML report with `npx playwright show-report` after a run.

## Production operations

- Canonical production origin: `https://autohisab.vercel.app`
- Vercel project: `autohisab`
- Production analytics variable: `NEXT_PUBLIC_GA_ID`
- Search Console verification asset: `/google7f2b357e11111af4.html`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

Do not publish placeholder environment values. A domain change requires updating `NEXT_PUBLIC_SITE_URL`, redeploying, and repeating the canonical, Open Graph, sitemap, robots, analytics, and Search Console checks.

## Release boundary

Phase 3 is a QA, measurement, and discoverability phase. Financing, live petrol prices, stored user data, accounts, payments, advertising, and new calculator logic remain outside scope. Future work should preserve the transparent cash-purchase model unless a separately approved specification replaces it.

## Evidence and remaining external actions

Automated and production evidence is recorded in `docs/TEST_REPORT.md` and the release checklist in `docs/QA_CHECKLIST.md`. Search Console ownership, sitemap submission, GA4 Realtime visibility, and real-device/assistive-technology observations require access to the relevant external account or device and should be recorded by the product owner when completed.
