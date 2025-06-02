<template>
  <div class="animation-wrapper">
    <div
      ref="box"
      class="box"
      :class="{ transfromX500: trans }"
      @click="boxClick"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const box = ref(null);
const trans = ref(false);
const boxClick = () => {
  trans.value = !trans.value;
};
</script>

<style scoped>
.animation-wrapper {
  .box {
    position: relative;
    left: 0;
    width: 200px;
    height: 200px;
    background: skyblue;
    transition: all 0.2s ease-in;
    &.transfromX500 {
      transform: translateX(500px) scale(1.3);
    }
  }
}
</style>
