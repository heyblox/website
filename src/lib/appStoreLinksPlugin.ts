import type { SatteriProcessorOptions } from '@astrojs/markdown-satteri';
import { APP_STORE_URL, appStoreUrl, guidePlacement } from './urls';

type HastPluginEntry = NonNullable<SatteriProcessorOptions['hastPlugins']>[number];

/**
 * Tags App Store links in guide Markdown with UTM parameters.
 * Placements are numbered in document order, e.g. `guide-block-a-customer-link-2`.
 */
export const appStoreLinksPlugin: HastPluginEntry = ({ fileURL }) => {
	const match = fileURL?.pathname.match(/\/content\/guides\/([^/]+)\.mdx?$/);
	if (!match) return null;
	const placement = guidePlacement(match[1]);
	let count = 0;
	return {
		name: 'app-store-links',
		element: {
			filter: ['a'],
			visit(node, ctx) {
				if (node.properties?.href !== APP_STORE_URL) return;
				ctx.setProperty(node, 'href', appStoreUrl(`${placement}-link-${++count}`));
			},
		},
	};
};
