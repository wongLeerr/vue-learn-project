<template>
  <ul class="cards-wrapper">
    <li v-for="i in 100" :key="i" class="card">{{ i }}</li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

onMounted(() => {
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        console.log(entry.target.innerHTML);
        intersectionObserver.unobserve(entry.target);
      }
    });
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    intersectionObserver.observe(card);
  });
});
</script>

<style scoped lang="less">
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  .card {
    width: 200px;
    height: 200px;
    background: lightblue;
    margin: 20px;
    text-align: center;
    line-height: 200px;
  }
}
</style>
