<template>
  <div class="calendar">
    <div class="calendar-header">
      <div v-for="day in weekDays" :key="day" class="week-day">
        {{ day }}
      </div>
    </div>
    <div class="operation-area">
      <div class="operation-area-left"><</div>
      <div class="operation-area-center">2024年12月</div>
      <div class="operation-area-right">></div>
    </div>
    <div class="calendar-body">
      <div v-for="item in monthDays" :key="item" class="calendar-day-item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const weekDays = ref(['一', '二', '三', '四', '五', '六', '日']);
const monthDays = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31
]);

const diffDays = ref(3);

onMounted(() => {
  if (diffDays.value > 0) {
    monthDays.value.unshift(...Array.from({ length: diffDays.value }));
  }
});
</script>

<style scoped lang="less">
.calendar {
  .calendar-header {
    display: flex;
    .week-day {
      flex: 0.143;
      text-align: center;
    }
  }
  .operation-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .calendar-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid blue;
    .calendar-day-item {
      width: 14.28%;
      text-align: center;
      border: 1px solid red;
    }
  }
}
</style>
