<template>
  <div class="wrapper">
    <div>
      <button @click="randomAdd">在任意位置添加一项</button>
      <button @click="randomRemove">在任意位置移除一项</button>
      <button @click="reverse">反转数据</button>
    </div>
    <transition-group name="ani" tag="ul">
      <li v-for="(item, index) in list" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const list = ref([1, 2, 3]);

const randomAdd = () => {
  const idx = getRandomInt();
  list.value.splice(idx, 0, list.value.length + 1);
};

const randomRemove = () => {
  const idx = getRandomInt();
  list.value.splice(idx, 1);
};

const reverse = () => {
  list.value.reverse();
};

const getRandomInt = () => {
  const max = list.value.length;
  return Math.floor(Math.random() * max);
};
</script>

<style scoped lang="less">
.wrapper {
  button {
    margin: 20px;
  }
  .ani-enter-from {
    transform: translateX(30px);
    opacity: 0;
  }
  .ani-enter-active {
    transition: all ease 0.5s;
  }
  .ani-enter-to {
    transform: translateX(0px);
    opacity: 1;
  }

  .ani-leave-from {
    transform: translateX(0px);
    opacity: 1;
  }
  .ani-leave-active {
    position: absolute;
    transition: all ease 0.5s;
  }
  .ani-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }
  .ani-move {
    transition: all ease 0.5s;
  }
}
</style>
