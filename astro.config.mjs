import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	build: {
		assets: 'assets',
	},
	integrations: [compress({ Logger: false }), tailwind()],
});
