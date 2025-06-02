<template>
  <transition name="mask">
    <div
      :style="{
        backgroundColor: isMaskVisible ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
        pointerEvents: isMaskVisible ? 'auto' : 'none'
      }"
      class="mask"
      @click="closeModal"
    ></div>
  </transition>

  <transition name="slide">
    <div v-if="isModalVisible" class="modal-wrapper">
      这是弹窗内容<button @click="closeModal">关闭弹框</button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue';

const emits = defineEmits(['closeVisible']);

const props = defineProps({
  isModalVisible: {
    type: Boolean,
    default: false
  },
  isMaskVisible: {
    type: Boolean,
    default: false
  }
});

const closeModal = () => {
  emits('closeVisible');
};
</script>

<style scoped lang="less">
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.modal-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  background: #fff;
  z-index: 1000;
}

.slide-enter-active {
  transition: transform 0.2s ease-in;
}

.slide-leave-active {
  transition: transform 0.2s ease-out;
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

.mask-enter-active {
  transition: opacity 0.9s ease-in;
}

.mask-leave-active {
  transition: opacity 0.9s ease-out;
}

.mask-enter-from {
  opacity: 0;
}

.mask-leave-to {
  opacity: 0;
}
</style>
