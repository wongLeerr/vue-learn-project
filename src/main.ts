import { createApp } from 'vue';

import App from './App.vue';

import router from './router/index';

import store from './store/index';

import ElementPlus from 'element-plus';
import 'nprogress/nprogress.css'; // nprogress 样式

import exposeDirective from './utils/directives/expose.js';
import lazyDirective from './utils/directives/lazy.js';
// tailwind css
import './styles/tailwind.css';

const app = createApp(App);

app.use(router);

app.use(store);

app.use(ElementPlus);

app.use(exposeDirective);
app.use(lazyDirective);

app.mount('#app');
