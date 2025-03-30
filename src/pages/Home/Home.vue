<template>
  <button @click="handleOpenModal(1)">open modal with mask</button>
  <hr />
  <button @click="handleOpenModal(2)">open modal with nomask</button>
  <hr />
  <button @click="handleConsole">打印</button>
  <hr />
  <HalfScreenModal
    :isModalVisible="isModalVisible"
    :isMaskVisible="isMaskVisible"
    @closeVisible="closeVisible"
  />
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import HalfScreenModal from '../../components/HalfScreenModal.vue';
const isModalVisible = ref(false);
const isMaskVisible = ref(false);

const handleOpenModal = (flag) => {
  switch (flag) {
    case 1:
      isModalVisible.value = true;
      isMaskVisible.value = true;
      break;
    case 2:
      isModalVisible.value = true;
      isMaskVisible.value = false;
      break;
    default:
      break;
  }
};

const closeVisible = () => {
  isModalVisible.value = false;
  isMaskVisible.value = false;
};

const handleConsole = () => {
  console.log('console.log');
};
</script>

<style scoped></style>
