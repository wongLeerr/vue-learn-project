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
    component: Home
  },
  {
    path: '/category',
    name: 'category',
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
  next();
});

router.afterEach((to, from) => {
  VNode.component?.exposed.endLoading();
  console.log('afterEach to:', to);
});

export default router;
