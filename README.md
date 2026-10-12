# AutoHisab

A mobile-first, Pakistan-focused vehicle ownership and fuel-cost calculator built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Monthly and annual fuel-cost calculator in PKR.
- Three-year and five-year side-by-side vehicle ownership comparison.
- Depreciation, fuel, maintenance, insurance, taxes/fees, and one-time cost breakdowns.
- Responsive charts, accessible forms, transparent formulas, and original guides.
- Static SEO metadata, canonical URLs, sitemap, and robots endpoints.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Use `npm run build` and `npm start` to run the production build locally.

## Production environment

Set these environment variables in Vercel for the Production environment, then redeploy:

```bash
NEXT_PUBLIC_SITE_URL=https://autohisab.vercel.app
NEXT_PUBLIC_SUPPORT_EMAIL=your-real-support-address@example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_SITE_URL` controls canonical links, Open Graph metadata, sitemap, and robots output. It defaults to the current Vercel production origin and accepts a future custom-domain origin. `NEXT_PUBLIC_SUPPORT_EMAIL` is optional; the contact page only displays an email when this value contains a valid address. `NEXT_PUBLIC_GA_ID` is optional; Google Analytics loads only when it matches the GA4 `G-...` measurement-ID format. Replace the examples above with values you control—do not copy placeholders into production.

## Checks

```bash
npm test
npm run test:e2e
npm run lint
npm run typecheck
npm run build
```

Install Playwright's browser once on a new machine with `npx playwright install chromium`. The browser suite covers both calculators, all guides, metadata endpoints, and desktop/mobile Chromium projects.

## Documentation

- [Project status](docs/PROJECT_STATUS.md)
- [Implementation log](docs/IMPLEMENTATION_LOG.md)
- [Test report](docs/TEST_REPORT.md)
- [SEO audit](docs/SEO_AUDIT.md)
- [Calculation methods](docs/CALCULATION_METHODS.md)
- [Product owner handoff](docs/HANDOFF.md)
- [Phase 3 handoff](docs/PHASE_3_HANDOFF.md)
- [Search Console setup](docs/SEARCH_CONSOLE_SETUP.md)
- [Analytics plan](docs/ANALYTICS_PLAN.md)
- [SEO opportunities](docs/SEO_OPPORTUNITIES.md)
- [QA checklist](docs/QA_CHECKLIST.md)

AutoHisab intentionally has no database, authentication, payments, or advertising code. Optional Google Analytics is documented in the privacy policy.
