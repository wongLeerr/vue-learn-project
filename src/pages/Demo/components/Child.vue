<template>
  <div>
    parent
    <slot></slot>
    <slot name="header" msg="header msg"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
