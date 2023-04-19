import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
 markdown: {
    drafts: true,
    shikiConfig: { theme: "css-variables" }
  },  
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(), compress(), sitemap()]
});