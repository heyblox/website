// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Custom domain heyblox.com is served at the site root.
export default defineConfig({
	site: 'https://heyblox.com',
	base: '/',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			// Legacy /website/* cutover redirects must not appear in the sitemap.
			// /docs/* pages are unlisted support references and are noindex.
			filter: (page) => {
				const { pathname } = new URL(page);
				return !pathname.startsWith('/website') && !pathname.startsWith('/docs');
			},
		}),
	],
});
