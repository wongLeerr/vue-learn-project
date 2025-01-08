<template>
  <div class="count-down-wrapper">
    <div class="time-item">
      <div class="number-wrapper">
        <transition name="flip">
          <span class="number" :key="diffTimeData.days">{{
            diffTimeData.days
          }}</span>
        </transition>
      </div>
      <span class="unit">天</span>
    </div>
    <div class="time-item">
      <div class="number-wrapper">
        <transition name="flip">
          <span class="number" :key="diffTimeData.hours">{{
            diffTimeData.hours
          }}</span>
        </transition>
      </div>
      <span class="unit">时</span>
    </div>
    <div class="time-item">
      <div class="number-wrapper">
        <transition name="flip">
          <span class="number" :key="diffTimeData.minutes">{{
            diffTimeData.minutes
          }}</span>
        </transition>
      </div>
      <span class="unit">分</span>
    </div>
    <div class="time-item">
      <div class="number-wrapper">
        <transition name="flip">
          <span class="number" :key="diffTimeData.seconds">{{
            diffTimeData.seconds
          }}</span>
        </transition>
      </div>
      <span class="unit">秒</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  timeStamp: {
    type: Number,
    default: 0,
    required: true
  }
});

let timer: number | null = null;

onMounted(() => {
  timer = setInterval(() => {
    calculateTimeDiff();
  }, 1 * 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

const diffTimeData = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

const calculateTimeDiff = () => {
  const now = Date.now();
  const diff = props.timeStamp - now;

  if (diff <= 0) {
    diffTimeData.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    clearInterval(timer!);
    timer = null;
    return;
  }

  diffTimeData.value = {
    days: Math.floor(diff / (24 * 60 * 60 * 1000)),
    hours: Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
    minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
    seconds: Math.floor((diff % (60 * 1000)) / 1000)
  };
};
</script>

<style scoped lang="less">
.count-down-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;

  .time-item {
    background: #f5f5f5;
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;

    .number-wrapper {
      position: relative;
      width: 32px;
      height: 24px;
      overflow: hidden;
    }

    .number {
      position: absolute;
      left: 0;
      right: 0;
      font-size: 20px;
      font-weight: bold;
      color: #333;
      text-align: center;
    }

    .unit {
      font-size: 14px;
      color: #666;
      margin-left: 4px;
    }
  }
}

.flip-enter-active,
.flip-leave-active {
  transition: all 0.3s ease-out;
}

.flip-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.flip-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.flip-enter-to,
.flip-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
