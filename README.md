# heyblox.com

Marketing site for **Blox**, Shopify chargeback / customer blocklist. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Build statically:

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publish `dist/` to GitHub Pages.

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

## Content / SEO next

Guides collection is scaffolded at `src/content/guides/`. Add Markdown files (set `draft: false`) and extend `src/pages/guides/` when the content program starts.
