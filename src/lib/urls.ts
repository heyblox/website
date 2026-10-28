/** Prefix a root-relative path with the configured Astro `base` (e.g. `/website/`). */
export function withBase(path = ''): string {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	const clean = path.replace(/^\//, '');
	return `${base}${clean}`;
}

/** Untagged Shopify App Store listing URL. Use for structured data, not for visitor-facing links. */
export const APP_STORE_URL = 'https://apps.shopify.com/blocklist';

/** App Store listing URL tagged with UTM parameters; `placement` names where the link sits (e.g. `home-hero`). */
export function appStoreUrl(placement: string): string {
	const url = new URL(APP_STORE_URL);
	url.searchParams.set('utm_source', 'heyblox.com');
	url.searchParams.set('utm_medium', 'website');
	url.searchParams.set('utm_content', placement);
	return url.href;
}

/** Short guide name for placements, e.g. `how-to-block-a-customer-on-shopify` → `block-a-customer`. */
export function guidePlacement(id: string): string {
	return `guide-${id.replace(/^how-to-/, '').replace(/-on-shopify$/, '')}`;
}
