import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WYWH/' : '/', // Chemin correct pour GitHub Pages
  plugins: [
    tailwindcss(),
    createHtmlPlugin({
      minify: true, // Minifie les fichiers HTML
      pages: {
        index: './src/index.html',
        music: './src/music.html',
        photo: './src/photo.html',
        providers: './src/providers.html',
      },
    }),
  ],
}));