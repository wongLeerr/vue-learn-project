<template>
  <GlobalFontSize />
</template>

<script setup lang="ts">
import GlobalFontSize from './components/GlobalFontSize.vue';
</script>

<style scoped lang="less">
@color: #ccc;
.box {
  .inner {
    color: @color;
  }
}
</style>
