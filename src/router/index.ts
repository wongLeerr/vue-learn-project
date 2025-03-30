import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';
import Apple from '../pages/Apple/AppleDialog.vue';
import NextPage from '../components/demo/NextPage.vue';
import NextPage2 from '../components/demo/NextPage2.vue';

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
  },
  {
    path: '/demo/next-page2',
    name: 'nextPage2',
    component: NextPage2
  },
  {
    path: '/apple',
    name: 'apple',
    component: Apple
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
