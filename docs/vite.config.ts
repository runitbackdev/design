import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { shikiHighlight } from "./shiki-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), shikiHighlight()],
  resolve: {
    alias: {
      "@runitback/react": resolve(import.meta.dirname, "../packages/react/src/index.ts"),
    },
  },
});
