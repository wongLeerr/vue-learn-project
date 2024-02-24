import { createApp } from 'vue';

import App from './App.vue';

import router from './router/index';

import store from './store/index';

import ElementPlus from 'element-plus';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

app.use(router);

app.use(store);

app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
