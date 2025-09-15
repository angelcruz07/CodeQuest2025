// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

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
        name: "Raleway",
        provider: fontProviders.google(),
        weights: ["300", "400", "600", "800", "900"],
        cssVariable: "--font-raleway",
        fallbacks: ["sans-serif"],
      },
      {
        name: "Space Mono",
        provider: fontProviders.google(),
        weights: ["300", "400", "600", "800", "900"],
        cssVariable: "--font-space-mono",
        fallbacks: ["monospace"],
      },
    ],
  },

  integrations: [react()],
});