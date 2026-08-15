// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: once benrigaud.com's DNS points here, switch `site` to
	// 'https://benrigaud.com' and remove `base` entirely (custom domains serve
	// from the root, not from /portfolio).
	site: 'https://benrigaud.github.io',
	base: '/portfolio',
});
