<template>
  <div>
    <loading-bar />
    <router-view #default="{ Component, route }">
      <transition :enter-active-class="route.meta.transition">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
/* 引入 animate.css 样式 */
@import url(animate.css);
</style>
