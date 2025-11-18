<template>
  <div>preload</div>
</template>

<script setup lang="ts">
import { LoadQueue } from 'preload-js';

const assets = [
  {
    name: 'annual_transition',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMTc3NDMxNDUz.json'
  },
  {
    name: 'annual_title',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMDU0ODY1NjU0.png'
  },
  {
    name: 'annual_subtitle',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMDU0OTU0OTE5.png'
  },
  {
    name: 'annual_homepage_ip',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMDU0OTc2NjYz.png'
  },
  {
    name: 'annual_unselect_icon',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMDk3ODUxOTQ4.png'
  },
  {
    name: 'annual_select_icon',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzIxMzc1OTgw.png'
  },
  {
    name: 'ip_lottie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMjM1MTU1NzA0.json'
  },
  {
    name: 'audio',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMjM3NTk0OTg5.png'
  },
  {
    name: 'silence',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMjM3NTk0NjU3.png'
  },
  {
    name: 'logo',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjE1Njg4ODYz.png'
  },
  {
    name: 'logo_homepage',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMDU0NzIzMTU3.png'
  },
  {
    name: 'guide',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjUxOTIzNDQ0.json'
  },
  {
    name: 'three_lottie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjc4Mjc1NTc5.json'
  },
  {
    name: 'four_lottie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzcxNTI4MDY0.json'
  },
  {
    name: 'five_lottie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzM5MDM2ODU0.json'
  },
  {
    name: 'six_lottie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMTkyNjc4NjAw.json'
  },
  {
    name: 'seven_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzcxNDU2MzM1.json'
  },
  {
    name: 'late_at',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjAxMTg5MzQz.json'
  },
  {
    name: 'late_ebook',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjAxMjQ3ODA1.json'
  },
  {
    name: 'late_odob',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjAxMjQ2MTEx.json'
  },
  {
    name: 'explore_new_knowledge_come',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjc4MzE4NTUx.json'
  },
  {
    name: 'explore_new_knowledge_go',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjAxMzcyMzMy.json'
  },
  {
    name: 'twelve_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjc4MzMyNTQ0.json'
  },
  {
    name: 'thirteen_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjE3MDYzMDk1.json'
  },
  {
    name: 'thirteen_short_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjE3MDYyMTI4.json'
  },
  {
    name: 'community_interaction_v0_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzczNDIyNTQz.png'
  },
  {
    name: 'community_interaction_v1_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzczMzk0MDUz.png'
  },
  {
    name: 'fourteen_loatie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzIxNTkwMjI1.json'
  },
  {
    name: 'fourteen_icon_loatie',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMzIxNzc1NDk3.json'
  },
  {
    name: 'two_lottie_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjc3Nzg1NzQ5.json'
  },
  {
    name: 'two_lottie_teacher_bg',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTczMjYwNzc1Mjk5.json'
  },
  {
    name: 'read_book',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMTE2ODA0MTg0.png'
  },
  {
    name: 'light',
    url: 'https://piccdn2.umiwi.com/fe-oss/default/MTcwMTMzMjMwNjAx.json'
  }
];

const manifests = assets.map((e) => ({
  id: e.name,
  src: e.url
}));

// 创建一个loader
const loader = new LoadQueue(true);

loader.on('progress', (e) => {
  const percent = Math.floor(e.progress * 100);
  console.log(`加载进度：${percent}%`);
});

// 单个文件加载完成
loader.on('fileload', (e) => {
  console.log('资源加载完成：', e.item.id, e.result);
});

// 全部加载完成
loader.on('complete', () => {
  console.log('全部资源加载完成');
});

// 开始加载
loader.loadManifest(manifests);
</script>

<style scoped lang="less"></style>
