<template>
  <div>
    <loading-bar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import LoadingBar from './components/Loading.vue';
</script>

<style>
/* 消除默认样式 */
@import url(./assets/css/reset.css);
/* 引入 element 样式 */
@import url(element-plus/dist/index.css);
</style>
