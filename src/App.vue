<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// 打印环境变量
console.log(import.meta.env);
</script>

<style>
/* 消除默认样式 */
@import url(./assets/css/reset.css);
/* 引入 element 样式 */
@import url(element-plus/dist/index.css);
</style>
