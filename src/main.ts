import { createApp } from 'vue';

import App from './App.vue';

import router from './router/index';

import store from './store/index';

import ElementPlus from 'element-plus';
import 'nprogress/nprogress.css'; // nprogress 样式

const app = createApp(App);

app.use(router);

app.use(store);

app.use(ElementPlus);

app.mount('#app');
