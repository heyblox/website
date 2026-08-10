/**
 * Paths that existed when Astro `base` was `/website/` and `site` was heyblox.com.
 * Sitemap/canonicals were `https://heyblox.com/website/...`; those URLs must redirect
 * to the root equivalents after the domain-root cutover.
 */
export const LEGACY_WEBSITE_PATHS = [
	'guides',
	'guides/blocklist-vs-fraud-filter',
	'guides/how-to-block-a-customer-on-shopify',
	'guides/how-to-block-repeat-chargeback-customers',
	'compare/blox-vs-blockify',
	'privacy',
	'terms',
] as const;
