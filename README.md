# AutoHisab

Phase 1 of a mobile-first, Pakistan-focused vehicle ownership and fuel-cost calculator built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production environment

Set these environment variables in Vercel for the Production environment, then redeploy:

```bash
NEXT_PUBLIC_SITE_URL=https://autohisab.vercel.app
NEXT_PUBLIC_SUPPORT_EMAIL=your-real-support-address@example.com
```

`NEXT_PUBLIC_SITE_URL` controls canonical links, Open Graph metadata, sitemap, and robots output. It defaults to the current Vercel production origin and accepts a future custom-domain origin. `NEXT_PUBLIC_SUPPORT_EMAIL` is optional; the contact page only displays an email when this value contains a valid address. Replace the example above with an inbox you control—do not copy the placeholder into production.

## Checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Phase 1 intentionally has no database, authentication, payments, analytics, or advertising code.
