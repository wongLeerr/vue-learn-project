<template>
  <div class="video-wrapper">
    <video
      @click="handleClickVideo"
      ref="video"
      class="video"
      src="http://vjs.zencdn.net/v/oceans.mp4"
      controls="false"
      width="600px"
    ></video>
    <!-- 播放按钮 -->
    <el-icon
      @click="playBtnClick"
      v-show="isShowPlayBtn"
      class="playbtn"
      size="40"
      ><VideoPlay
    /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const video = ref();
const isShowPlayBtn = ref(true);

const playBtnClick = () => {
  hidePlayBtn();
  video.value.play();
};

const handleClickVideo = () => {
  showPlayBtn();
};

// 显示播放按钮
const showPlayBtn = () => {
  isShowPlayBtn.value = true;
};

// 隐藏播放按钮
const hidePlayBtn = () => {
  isShowPlayBtn.value = false;
};

// video 实例
</script>

<style scoped lang="less">
video {
  margin: 0;
  padding: 0;
}
.video-wrapper {
  position: relative;
  margin: 200px auto;
  width: 600px;
  border: 1px solid red;
  .video {
    height: 100%;
    &::-webkit-media-controls {
      display: none !important;
    }
  }
  .playbtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
  }
}
</style>
