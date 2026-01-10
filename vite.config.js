import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/WYWH/' : '/', // Chemin correct pour GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions:{
      input: {
        main: './index.html',
        music: './music.html',
        photo: './photo.html',
        artists: './artists.html'
      }
    }
  }
}));