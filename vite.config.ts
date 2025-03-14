import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/testing-deploy/",
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});