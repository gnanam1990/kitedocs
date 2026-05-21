import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://kitedocs.dev",
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      langs: ["typescript", "javascript", "python", "bash", "json", "solidity", "tsx"],
      wrap: true,
    },
  },
});
