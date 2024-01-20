// 将 px 转化为 vw vh 的插件
// vite 已经内置了 postCss
import { Plugin } from 'postCss';

const Options = {
  viewportWidth: 375
};

interface Options {
  viewportWidth?: number;
}

export const postCssPxToViewport = (options: Options = Options): Plugin => {
  const opt = Object.assign({}, Options, options);
  return {
    postcssPlugin: 'postCss-px-to-viewport',
    // 钩子
    Declaration(node) {
      // node.prop 就是样式的 key
      // node.value 就是样式的 value
      // 如 font-size:16px 那么 node.prop 就是 font-size , node.value 就是16 px

      if (node.value.includes('wl')) {
        let num = parseFloat(node.value);
        node.value = `${((num / opt.viewportWidth) * 100).toFixed(2)} vw`;
      }
    }
  };
};
