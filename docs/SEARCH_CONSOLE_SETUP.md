# Google Search Console Setup

Setup guide reviewed: 12 October 2026

## Recommended property

Create a URL-prefix property for `https://autohisab.vercel.app/`. A Domain property is preferable after AutoHisab moves to a controlled custom domain because it covers protocol and subdomain variants, but it requires DNS access.

## Verify ownership

1. Sign in to Google Search Console with the long-term product-owner account.
2. Add the URL-prefix property `https://autohisab.vercel.app/`.
3. Choose HTML file verification.
4. Use the existing file named `google7f2b357e11111af4.html`.
5. Confirm `https://autohisab.vercel.app/google7f2b357e11111af4.html` returns HTTP 200 without a redirect or login.
6. Select **Verify** and keep the file deployed; removing it can invalidate ownership.

The repository contains the verification file, but only Search Console can confirm that the token belongs to the intended account. Do not replace it without recording the account and verification change.

## Submit the sitemap

1. Open **Indexing → Sitemaps** for the verified property.
2. Submit `https://autohisab.vercel.app/sitemap.xml`.
3. Confirm Search Console reports a successful fetch.
4. Compare the discovered URL count with the sitemap. It currently lists the homepage, two calculators, four guides, and four supporting pages.

## Inspect priority URLs

Use URL Inspection for:

- `/`
- `/fuel-cost-calculator-pakistan`
- `/car-ownership-cost-calculator`
- each of the four `/guides/...` routes

For each URL, confirm the declared canonical and Google-selected canonical agree, the page is indexable, and the last crawl did not report a rendering or mobile-usability issue. Request indexing after a material content or canonical change, not after every documentation-only deployment.

## Ongoing review

- Weekly for the first month: Pages indexing, Core Web Vitals, HTTPS, Mobile Usability if shown, manual actions, and security issues.
- Monthly thereafter: queries, landing pages, click-through rate, country/device mix, and newly excluded URLs.
- Record changes in impressions only after allowing for crawl and reporting delay; Search Console is not real-time analytics.
- Export a baseline before title, description, domain, or major content changes so impact can be compared.

## Domain migration

Before moving to a custom domain, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin and redeploy. Verify the new property, submit its sitemap, check redirects from the Vercel domain, and confirm every canonical and Open Graph URL uses the new origin. Keep both properties during the transition.
