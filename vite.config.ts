import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import path from 'path';

// __dirname für ES Modules simulieren
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@cm': path.resolve(__dirname, 'src/components'),
      '@ut': path.resolve(__dirname, 'src/utils'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@ho': path.resolve(__dirname, 'src/hooks'),
      '@ly': path.resolve(__dirname, 'src/layout'),
      '@pg': path.resolve(__dirname, 'src/pages'),
      '@scss': path.resolve(__dirname, 'src/styles'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
    scss: {
  additionalData: `
    @use "@scss/variables.scss" as *;
    @use "@scss/mixins.scss" as *;
  `
}
    },
  },
});