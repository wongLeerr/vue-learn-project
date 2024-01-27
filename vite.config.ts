import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

console.log('process', process.env.NODE_ENV);

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(loadEnv(mode, process.cwd()));
  console.log('mode:', mode);
  return defineConfig({
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
      }
    }
  });
};
