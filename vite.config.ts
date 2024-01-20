import path from 'path';
import { defineConfig } from 'vite';
import { postCssPxToViewport } from './src/plugins/postCss-px-to-viewport';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  css: {
    preprocessorOptions: {
      less: {}
    },
    postcss: {
      plugins: [postCssPxToViewport()]
    }
  }
});
