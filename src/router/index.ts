import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';

import { mountLoadingBar } from '../assets/ts/utils';

// 实现将loadingBar挂载到body身上
const VNode = mountLoadingBar();

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      transition: 'animate__animated animate__backInDown'
    },
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      title: '分类页',
      transition: 'animate__animated  animate__fadeIn'
    },
    component: Category
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach to:', to);
  VNode.component?.exposed.startLoading();
  document.title = to.meta.title;
  next();
});

router.afterEach((to, from) => {
  VNode.component?.exposed.endLoading();
  console.log('afterEach to:', to);
});

export default router;
