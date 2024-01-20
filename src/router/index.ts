import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import Category from "../pages/Category/Category.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
