import { createVNode, render } from 'vue';
import LoadingBar from '../../components/Loading.vue';

// 实现将loadingbar挂载到body上
export const mountLoadingBar = () => {
  const VNode = createVNode(LoadingBar);
  render(VNode, document.body);
  return VNode;
};
