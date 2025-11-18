<template>
  <div>
    <div ref="lottieEl" class="lottie-wrapper" />
    <button @click="play">play</button>
    <button @click="stop">stop</button>
    <button @click="goToAndPlay">goToAndPlay</button>
    <button @ciick="goToAndStop">goToAndStop</button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, onBeforeUnmount } from 'vue';
import lottie from 'lottie-web';
const lottieEl = ref(null);
let animation = null;

onMounted(() => {
  animation = lottie.loadAnimation({
    container: lottieEl.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMjYxMDY5MjY2.json'
  });

  console.log('animation >>>', animation);
});

const play = () => {
  animation.play();
};

const stop = () => {
  animation.stop();
};

const goToAndPlay = () => {
  animation.goToAndPlay(1000, true);
};

const goToAndStop = () => {
  animation.goToAndStop(60, true);
};

onBeforeUnmount(() => {
  animation?.destroy();
});
</script>

<style scoped lang="less">
// .lottie-wrapper {
//   width: 200px;
//   height: 200px;
// }
</style>
