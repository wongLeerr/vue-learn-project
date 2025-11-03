import { ref } from 'vue';
import useListener from './useListener';

const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  useListener(window, 'mousemove', (event) => {
    x.value = event.x;
    y.value = event.y;
  });

  return {
    x,
    y
  };
};

export default useMouse;
