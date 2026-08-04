// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Custom domain heyblox.com is served at the site root.
export default defineConfig({
	site: 'https://heyblox.com',
	base: '/',
	integrations: [sitemap()],
});
