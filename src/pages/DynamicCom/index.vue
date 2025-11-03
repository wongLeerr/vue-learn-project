<template>
  <div>
    <div v-for="(_, tab) in tabs" :key="tab" @click="curTab = tab">
      {{ tab }}
    </div>
    <component :is="tabs[curTab]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import Archive from './components/Archive.vue';

const tabs = {
  Home,
  Posts,
  Archive
};

const curTab = ref('Home');
</script>

<style scoped></style>
