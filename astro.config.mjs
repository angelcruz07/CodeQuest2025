// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  output: "server",
  experimental: {
    fonts: [
      {
        name: "Raleyway",
        provider: fontProviders.google(),
        cssVariable: "--font-raleway",
      },
      {
        name: "Space Mono",
        provider: fontProviders.google(),
        cssVariable: "--font-space-mono",
      },
    ],
  },
});
