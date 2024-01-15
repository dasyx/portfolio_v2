import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
