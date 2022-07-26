import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createPinia } from 'pinia';
import { initI18n } from '@/utils/i18n';

import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/scss/index.scss';
import 'tailwindcss/tailwind.css';

createApp(App).use(createPinia()).use(router).use(initI18n()).use(Vant).mount('#app');
