<template>
  <p class="message">这是一段文字...</p>
  <section>
    切换字体大小:
    <el-button type="primary" size="small" @click="change(36)">大</el-button>
    <el-button type="primary" size="small" @click="change(24)">中</el-button>
    <el-button type="primary" size="small" @click="change(12)">小</el-button>
  </section>
</template>

<script setup lang="ts">
// import { useCssVar } from '@vueuse/core';

// useCssVar 底层原理：
/**
 * 设置全局属性 document.documentElement.style.setProperty('--size', num + 'px');
 */

const change = (num: number) => {
  //   const size = useCssVar('--size');
  //   size.value = num + 'px';

  // 获取全局属性
  console.log(document.documentElement.style.getPropertyValue('--size'));
  document.documentElement.style.setProperty('--size', num + 'px');
};
</script>

<style scoped lang="less">
:root {
  --size: 12px;
}
.message {
  font-size: var(--size);
}
</style>
