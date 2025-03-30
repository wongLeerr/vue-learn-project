import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ElectronDevPlugin } from './plugins/vite.electron.dev';

// https://vitejs.dev/config/
export default ({ mode }) => {
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
    },
    server: {
      port: 3000, // 将端口号改为 3000
      open: true // 可选，设置为 true 表示启动项目后自动打开浏览器
    }
  });
};
