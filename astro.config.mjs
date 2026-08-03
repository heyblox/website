// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Project Pages URL is https://heyblox.github.io/website/
// When heyblox.com DNS points here at the domain root, change base to '/'.
export default defineConfig({
	site: 'https://heyblox.com',
	base: '/website/',
	integrations: [sitemap()],
});
