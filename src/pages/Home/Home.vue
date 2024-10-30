<template>
  <div>{{ store.count }} 6</div>
</template>

<script setup lang="ts">
import { defineCustomElement } from 'vue';
import CustomVueCe from '@/components/CustomVue.ce.vue';

const Btn = defineCustomElement(CustomVueCe);

window.customElements.define('wll-btn', Btn);
</script>

<style scoped lang="less"></style>
