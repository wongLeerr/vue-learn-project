import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';

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
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
