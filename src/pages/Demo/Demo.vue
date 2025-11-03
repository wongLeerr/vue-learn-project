<template>
  <div>demo:{{ x }} - {{ y }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useMouse from './hooks/useMouse';
import { useFetch } from './hooks/useFetch';

const url = ref;

const { x, y } = useMouse();
</script>

<style scoped lang="scss"></style>
