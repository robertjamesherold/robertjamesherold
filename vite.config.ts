import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// __dirname für ES Modules simulieren
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@cm': resolve(__dirname, 'src/components'),
      '@ut': resolve(__dirname, 'src/utils'),
      '@img': resolve(__dirname, 'src/assets/images'),
      '@svg': resolve(__dirname, 'src/assets/svg'),
      '@icons': resolve(__dirname, 'src/assets/icons'),
      '@fonts': resolve(__dirname, 'src/assets/fonts'),
      '@ho': resolve(__dirname, 'src/hooks'),
      '@ly': resolve(__dirname, 'src/layout'),
      '@pg': resolve(__dirname, 'src/pages'),
      '@scss': resolve(__dirname, 'src/styles'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
    scss: {
  additionalData: `
    @use "@scss/_variables.scss" as *;
    @use "@scss/_mixins.scss" as *;
  `
}
    },
  },
});