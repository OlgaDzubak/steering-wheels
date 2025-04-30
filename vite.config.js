import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig({
  server: {
    open: true, // Автоматически открывать браузер при запуске сервера
  },
  plugins: [react(), svgr(), analyzer()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  base: '/steering-wheels',
});