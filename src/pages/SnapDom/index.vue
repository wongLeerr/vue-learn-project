<template>
  <div id="target">
    <h1>这是一只猪</h1>
    <img src="https://piccdn2.umiwi.com/fe-oss/default/MTc1OTk5Nzk1OTUx.jpeg" />
  </div>

  <button @click="onCapture">go</button>
</template>

<script setup lang="ts">
import { snapdom } from '@zumer/snapdom';

const onCapture = async () => {
  const target = document.getElementById('target');
  const result = await snapdom(target);
  const img = await result.toPng();
  document.body.appendChild(img);
  await result.download({
    format: 'jpg',
    filename: 'capture'
  });
};
</script>

<style scoped lang="less">
#target {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 300px;
  height: 300px;
  font-weight: 700;
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
