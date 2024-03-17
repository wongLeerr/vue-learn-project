<template>
  <div class="wrap">
    <div ref="loadingBar" class="loading-bar"></div>
  </div>
</template>

<script setup lang="ts">
import { time } from 'console';
import { ref, onMounted } from 'vue';
const loadingBar = ref();
const progress = ref(0);
const timer = ref(0);

const startLoading = () => {
  progress.value = 0;
  timer.value = window.requestAnimationFrame(function fn() {
    if (progress.value < 90) {
      progress.value += 1;
      loadingBar.value.style.width = progress.value + '%';
      timer.value = window.requestAnimationFrame(fn);
    } else {
      progress.value = 0;
    }
  });
};

const endLoading = () => {
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      progress.value = 100;
      loadingBar.value.style.width = progress.value + '%';
    });
  }, 1000);
};

defineExpose({
  startLoading,
  endLoading
});
</script>

<style scoped lang="less">
.wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2px;
  .loading-bar {
    height: inherit;
    width: 200px;
    background-color: blue;
  }
}
</style>
