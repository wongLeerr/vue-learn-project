<template>
  <div>{{ store.count }} 6</div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/modules/home';

const store = useHomeStore();
</script>

<style scoped lang="less">
@color: #ccc;
.box {
  .inner {
    color: @color;
  }
}
</style>
