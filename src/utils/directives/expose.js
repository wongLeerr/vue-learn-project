// 曝光指令
export default (Vue) => {
  Vue.directive('expose', {
    mounted(el, binding) {
      const { cb, args } = binding.value;
      el.$cb = cb;
      el.$args = args;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { target } = entry;
            target.$cb(entry, observer);
            console.log('entry:', entry);
          });
        },
        {
          threshold: [0, 0.5, 0.9, 1] // 此元素与视口重叠度为0%时触发、此元素与视口重叠度为100%时触发,触发什么？触发这个对象前边的回调
        }
      );
      observer.observe(el);
    }
  });
};
