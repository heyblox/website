# heyblox.com

Marketing site for **Blox**, Shopify chargeback / customer blocklist. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Copy [`.env.example`](.env.example) to `.env` for local builds of `/fraud-index/`.

Build statically:

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publish `dist/` to GitHub Pages. The same workflow also runs on the 1st and 2nd of each month so the Fraud Index page picks up the new monthly publish. Pull requests run the same build without deploying, and `main` requires that `build` check to pass before merging.

Dependabot ([`.github/dependabot.yml`](.github/dependabot.yml)) opens weekly PRs for npm packages and GitHub Actions.

## Blox Fraud Index

`/fraud-index/` is prerendered at build time from the public marketing `GET /fraud-index` JSON endpoint. Numbers must be in the HTML for search and answer engines; do not fetch them only in the browser.

Set `FRAUD_INDEX_API_URL` to the full public URL. Resolve it from the `cn-marketing-prd` CloudFormation output `HttpApiUrl` plus `/fraud-index`, or from `FRAUD_INDEX_PUBLIC_URL` after the marketing service deploy. Do not hardcode an API Gateway id in the site.

GitHub Actions reads repository variable `FRAUD_INDEX_API_URL` (Settings → Secrets and variables → Actions → Variables). If the variable is missing or the API returns 404, the page still ships with static explainer copy and no invented stats.

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Custom domain is set via [`public/CNAME`](public/CNAME) (`heyblox.com`).

Astro `base` is `/` so the site works at the apex domain root after DNS cutover. Legacy `/website/*` URLs from the project-pages base path redirect to the root equivalents. The project preview URL `https://heyblox.github.io/website/` will not style correctly while `base` is `/`; use `heyblox.com` (or local `npm run preview`) once DNS is pointed here.

## DNS cutover (from Webflow)

1. Enable GitHub Pages (Actions) and confirm a successful deploy.
2. In Pages settings, set custom domain to `heyblox.com` and wait for DNS check / HTTPS.
3. At your DNS provider:
   - **Apex** `heyblox.com` → GitHub Pages A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or AAAA equivalents if you use IPv6 (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
   - **www** → `CNAME` to `heyblox.github.io` (org site) or the Pages hostname GitHub shows.
4. Remove Webflow DNS / hosting once the new site resolves and HTTPS works.
5. Confirm `/`, `/privacy`, and `/terms` (linked from App Store / emails).

## Brand assets

Source files live in [`assets/`](assets/). Served copies:

| Public path | Source |
|-------------|--------|
| `/logo.png` | `assets/logo_1200.png` |
| `/logo-512.png` | `assets/logo_512.png` |
| `/identity-network.jpg` | network graphic in `assets/` |

`/og.png` is the 1200×630 link-preview image, rendered from [`assets/og-image.html`](assets/og-image.html) with headless Chrome. After editing the template or the logo, regenerate it with:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 --screenshot="$PWD/public/og.png" "file://$PWD/assets/og-image.html"
```

## Analytics and cookie consent

Google Analytics loads only on the live site. [`BaseLayout.astro`](src/layouts/BaseLayout.astro) sets Google Consent Mode defaults before the tag loads: ad storage is denied everywhere, and analytics storage is denied in the EEA, UK and Switzerland until the visitor accepts. [`ConsentBanner.astro`](src/components/ConsentBanner.astro) asks on the first visit and saves the choice in `localStorage` (`analytics-consent`); the footer's “Cookie settings” link reopens it. The privacy policy's `#cookies` section describes this, so keep them in step.


## Content / SEO next

Guides collection is scaffolded at `src/content/guides/`. Add Markdown files (set `draft: false`) and extend `src/pages/guides/` when the content program starts.
