import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig ({
    base: "/WYWH/", // nom du repo 
    plugins: [
        tailwindcss(),
    ]
})