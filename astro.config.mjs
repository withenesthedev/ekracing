import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets'
  },
  site: 'https://ekracing.com.tr',
  integrations: [tailwind(), sitemap()]
});
