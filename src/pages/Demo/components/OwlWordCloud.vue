<template>
  <div class="owl-word-cloud-wrapper" ref="wrapper">
    <!-- 背景猫头鹰图片 -->
    <!-- 样式由 JS 动态控制以保证与 mask 对齐 -->
    <img
      ref="owlImage"
      :src="owlImageUrl"
      class="owl-img"
      alt="owl"
      :style="imgStyle"
      @load="handleImageLoad"
    />

    <!-- ECharts 容器 -->
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import owlImageUrl from '../assets/owl.png';

export default {
  name: 'OwlWordCloud',
  data() {
    return {
      chartInstance: null,
      owlImageUrl,
      isImageLoaded: false,
      imgNaturalWidth: 0,
      imgNaturalHeight: 0,
      // 控制图片样式的对象
      imgStyle: {
        position: 'absolute',
        opacity: 0, // 加载前隐藏
        zIndex: 1
      },
      // 词云数据 - 增加数据量以撑满屏幕
      wordData: this.generateWordData()
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
  },
  methods: {
    generateWordData() {
      const baseData = [
        { name: 'Vue', value: 10000 },
        { name: 'JavaScript', value: 8000 },
        { name: 'TypeScript', value: 7500 },
        { name: 'ECharts', value: 7000 },
        { name: 'WordCloud', value: 6500 },
        { name: 'Component', value: 6000 },
        { name: 'Reactive', value: 5500 },
        { name: 'DataVis', value: 5000 },
        { name: 'Frontend', value: 4500 },
        { name: 'Web', value: 4000 },
        { name: 'Develop', value: 3800 },
        { name: 'User', value: 3500 },
        { name: 'Design', value: 3200 },
        { name: 'Performance', value: 3000 },
        { name: 'Code', value: 2800 },
        { name: 'Engineer', value: 2500 },
        { name: 'Module', value: 2200 },
        { name: 'Maintain', value: 2000 },
        { name: 'Scalable', value: 1800 },
        { name: 'Best', value: 1500 },
        { name: 'Practice', value: 1400 },
        { name: 'Optimization', value: 1300 },
        { name: 'Animation', value: 1200 },
        { name: 'Interactive', value: 1100 },
        { name: 'Interface', value: 1000 },
        { name: 'Experience', value: 950 },
        { name: 'Creative', value: 900 },
        { name: 'Logic', value: 850 },
        { name: 'Algorithm', value: 800 },
        { name: 'Structure', value: 750 }
      ];
      // 复制多份数据以填满屏幕，稍微随机化 value 避免完全重叠（虽然词云库通常处理得当）
      let result = [];
      for (let i = 0; i < 6; i++) {
        result = result.concat(
          baseData.map((item) => ({
            name: item.name,
            value: item.value * (0.8 + Math.random() * 0.4) // 轻微浮动
          }))
        );
      }
      return result;
    },

    handleImageLoad(e) {
      const img = e.target;
      this.imgNaturalWidth = img.naturalWidth;
      this.imgNaturalHeight = img.naturalHeight;
      this.isImageLoaded = true;

      // 图片加载完成后初始化
      this.$nextTick(() => {
        this.updateLayoutAndChart();
      });
    },

    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
      // 重新计算布局和 mask
      if (this.isImageLoaded) {
        // 使用防抖或简单延迟避免频繁重绘
        if (this.resizeTimer) clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          this.updateLayoutAndChart();
        }, 200);
      }
    },

    updateLayoutAndChart() {
      const wrapper = this.$refs.wrapper;
      if (!wrapper || !this.isImageLoaded) return;

      const cw = wrapper.clientWidth;
      const ch = wrapper.clientHeight;

      // 1. 计算图片包含 (contain) 在容器中的尺寸和位置
      // 这里我们设定图片最大占据容器的 80%，留出边缘给词云
      const paddingScale = 0.6; // 图片占据 60% 大小
      const imgRatio = this.imgNaturalWidth / this.imgNaturalHeight;
      const containerRatio = cw / ch;

      let drawW, drawH;

      if (containerRatio > imgRatio) {
        // 容器更宽，高度受限
        drawH = ch * paddingScale;
        drawW = drawH * imgRatio;
      } else {
        // 容器更高，宽度受限
        drawW = cw * paddingScale;
        drawH = drawW / imgRatio;
      }

      // 居中坐标
      const startX = (cw - drawW) / 2;
      const startY = (ch - drawH) / 2;

      // 2. 更新显式展示的 img 标签样式
      this.imgStyle = {
        position: 'absolute',
        width: `${drawW}px`,
        height: `${drawH}px`,
        left: `${startX}px`,
        top: `${startY}px`,
        opacity: 1, // 显示图片
        zIndex: 1,
        pointerEvents: 'none' // 让鼠标事件穿透图片到达 echarts
      };

      // 3. 生成 Mask Canvas
      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = cw;
      maskCanvas.height = ch;
      const ctx = maskCanvas.getContext('2d');

      // 填充背景（可写字区域）
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cw, ch);

      // 擦除图片区域（猫头鹰形状）
      ctx.globalCompositeOperation = 'destination-out';
      // 使用原始图片对象绘制到计算出的位置
      ctx.drawImage(this.$refs.owlImage, startX, startY, drawW, drawH);

      // 4. 初始化或更新图表
      if (!this.chartInstance) {
        this.chartInstance = echarts.init(this.$refs.chartContainer);
      }

      const option = {
        tooltip: {
          show: true
        },
        series: [
          {
            type: 'wordCloud',
            // 关键：maskImage 尺寸与容器一致，且镂空位置与 img 标签一致
            maskImage: maskCanvas,

            sizeRange: [14, 80], // 增大字体范围
            rotationRange: [0, 0], // 不倾斜
            rotationStep: 0,
            gridSize: 8,
            drawOutOfBound: false,

            // 填满容器
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            right: 0,
            bottom: 0,

            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: function () {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') +
                  ')'
                );
              }
            },
            emphasis: {
              focus: 'self',
              textStyle: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: this.wordData
          }
        ]
      };

      this.chartInstance.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.owl-word-cloud-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;

  .owl-img {
    transition: all 0.3s ease-out;
  }

  .chart-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
</style>
