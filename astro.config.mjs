// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://careers.kaplaninternational.com',
  output: 'static',
  trailingSlash: 'never',
});
