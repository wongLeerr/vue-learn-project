import { onMounted, onBeforeUnmount } from 'vue';

const useListener = (target, type, cb) => {
  onMounted(() => target.addEventListener(type, cb));
  onBeforeUnmount(() => target.removeEventListener(type, cb));
};

export default useListener;
