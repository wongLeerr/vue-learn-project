import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ElectronDevPlugin } from './plugins/vite.electron.dev';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ElectronDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
});
