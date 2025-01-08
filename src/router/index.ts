import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';
import NextPage from '../components/demo/NextPage.vue';

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
  },
  {
    path: '/demo/next-page',
    name: 'nextPage',
    component: NextPage
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
