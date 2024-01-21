// 开发环境插件
import type { Plugin } from 'vue';
import type { AddressInfo } from 'net';
import { spawn } from 'child_process';
import esbuild from 'esbuild';
import electron from 'electron';
import fs from 'node:fs';

export const ElectronDevPlugin = (): Plugin => {
  return {
    name: 'electron-dev',
    // 很多钩子
    configureServer(server) {
      // 定义初始化Electron的函数
      const initElectron = () => {
        // 使用esbuild编译TypeScript代码为JavaScript
        esbuild.buildSync({
          entryPoints: ['src/background.ts'],
          bundle: true,
          outfile: 'dist/background.js',
          platform: 'node',
          target: 'node12',
          external: ['electron']
        });
      };

      // 调用初始化Electron函数
      initElectron();

      server.httpServer.once('listening', () => {
        const addressInfo = server.httpServer.address() as AddressInfo;
        const IP = `http://${addressInfo.address}:${addressInfo.port}`;
        // 进程传参法
        let electronProcess = spawn(electron, ['dist/background.js', IP]);

        fs.watchFile('src/background.ts', () => {
          electronProcess.kill();
          initElectron();
          electronProcess = spawn(electron, ['dist/background.js', IP]);
        });
      });
    }
  };
};
