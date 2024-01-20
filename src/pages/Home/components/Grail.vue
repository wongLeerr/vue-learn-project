<template>
  <header>
    <div>left</div>
    <div>middle</div>
    <div>right</div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
header {
  display: flex;
  div {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  div:nth-child(1) {
    width: 100wl;
    background-color: cyan;
  }
  div:nth-child(2) {
    flex: 1;
    background-color: skyblue;
  }
  div:nth-child(3) {
    width: 100wl;
    background-color: red;
  }
}
</style>
