import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import astro from "astro-compress";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
   site: 'https://supremeuikits.com',
  integrations: [tailwind(), partytown(), astro(), sitemap(), image()]
});