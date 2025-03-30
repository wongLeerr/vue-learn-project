<template>
  <div>
    <button @click="handleBtnClick" ref="btnRef">按钮</button>
    <Transition name="fade">
      <div v-if="showPopover" class="popover" :style="popoverStyle" @click.stop>
        <div class="popover-content">
          <div
            class="option"
            v-for="(item, index) in options"
            :key="index"
            @click="handleOptionClick(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const btnRef = ref<HTMLElement | null>(null);
const showPopover = ref(false);
const clickPosition = ref({ x: 0, y: 0 });

const options = ['选项1', '选项2', '选项3'];

const handleBtnClick = (event: MouseEvent) => {
  console.log('按钮被点击');
  event.stopPropagation();
  const rect = btnRef.value?.getBoundingClientRect();
  if (rect) {
    clickPosition.value = {
      x: rect.left,
      y: rect.top + rect.height
    };
  }
  showPopover.value = true;
};

const handleOptionClick = (option: string) => {
  console.log('选择了:', option);
  showPopover.value = false;
};

const popoverStyle = computed(() => ({
  left: `${clickPosition.value.x}px`,
  top: `${clickPosition.value.y}px`
}));

// 点击外部关闭弹窗
window.addEventListener('click', () => {
  showPopover.value = false;
});
</script>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.popover {
  position: fixed;
  z-index: 1000;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform-origin: top left;
}

.popover-content {
  padding: 8px 0;
  min-width: 120px;

  .option {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
