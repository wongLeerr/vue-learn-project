import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unoCss({
      rules: [
        ['flex', { display: 'flex' }],
        ['red', { color: 'red' }]
      ]
    })
  ],
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
