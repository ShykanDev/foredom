import './assets/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import emailjs from '@emailjs/browser';
import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill);
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
emailjs.init("fXlbInB-wrOGPiUbH");
const app = createApp(App)
app.component("v-icon", OhVueIcon)

app.use(createPinia())
app.use(router)
app.use(
  Vue3Toastify,
  {
    autoClose: 3000,
    // ...
  } as ToastContainerOptions,
)
app.mount('#app')
