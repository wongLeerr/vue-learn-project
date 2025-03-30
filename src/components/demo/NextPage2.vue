<template>
  <div class="scroll-container">
    <ul>
      <li v-for="item in itemList" :key="item">{{ item }}</li>
      <div
        v-expose="{
          cb: callback,
          args: {
            obj: {
              name: 'rose',
              age: 18
            }
          }
        }"
        class="end-container"
      ></div>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 通过检测滚动行为来实现加载更多
import { ref } from 'vue';

const itemList = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
]);

const obj = {
  name: 'rose',
  age: 18
};

const loadMore = () => {
  itemList.value = [...itemList.value, ...itemList.value];
};

const callback = (entry, observer) => {
  const { $args } = entry.target;
  console.log('$args:', $args);
  if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
    loadMore();
  }
};
</script>

<style lang="less" scoped>
.scroll-container {
  width: 500px;
  height: 100%;
  border: 2px solid blue;
  text-align: center;
  overflow-y: scroll;
  li {
    margin: 10px 0;
    padding: 10px 50px;
    border: 1px solid red;
  }
  .end-container {
    height: 5px;
    width: 100%;
    background-color: blue;
  }
}
</style>
