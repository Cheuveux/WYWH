import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WYWH/' : '/', // Chemin correct pour GitHub Pages
  plugins: [
    tailwindcss(),
   
  ],
}));