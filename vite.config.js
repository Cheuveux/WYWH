import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WYWH/' : '/', // Chemin correct pour GitHub Pages
  build: {
    outDir: 'dist',
  }
}));