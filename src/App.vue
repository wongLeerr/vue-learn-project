<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style>
/* 消除默认样式 */
@import url(./assets/css/reset.css);
/* 引入 element 样式 */
@import url(element-plus/dist/index.css);

html,
body,
#app {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
}
</style>
