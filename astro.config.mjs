// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});