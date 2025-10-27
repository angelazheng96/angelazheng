// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://angelazheng.ca'
});