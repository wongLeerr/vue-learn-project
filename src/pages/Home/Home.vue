<template>
  <div class="home">
    <CountDown :timeStamp="1735660800000" eventName="跨年" />
  </div>
</template>

<script setup lang="ts">
import CountDown from '@/components/common/CountDown/CountDown.vue';
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
