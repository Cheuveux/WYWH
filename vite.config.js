import { defineConfig } from "vite";
import multiHtml from "vite-plugin-multi-html";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WYWH/' : '/', // Chemin correct pour GitHub Pages
  plugins: [
    tailwindcss(),
    multiHtml({
      pages: {
        index: './src/index.html',
        music: './src/music.html',
        photo: './src/photo.html',
        providers: './src/providers.html',
      },
    }),
  ],
}));