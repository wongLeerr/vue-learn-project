export default (Vue) => {
  Vue.directive('lazy', {
    mounted(el, binding) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        console.log(entries);

        if (entries[0].intersectionRatio > 0) {
          el.src = binding.value;
          intersectionObserver.unobserve(el);
        }
      });

      intersectionObserver.observe(el);
    }
  });
};
