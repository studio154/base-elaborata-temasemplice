import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import astro from "astro-compress";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
// https://astro.build/config
export default defineConfig({
   site: 'https://lexingtonthemes.com',
  integrations: [tailwind(), astro(), sitemap(), image()]
});