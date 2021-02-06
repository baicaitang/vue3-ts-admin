import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "./plugins/cookie";
// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// asiox 
// import axios from 'axios';
// 语言翻译配置
import VueI18n from './language/index.js';
// svg 全局组件
import SvgIcon from '@/components/Svgicon/index.vue';
// svg 文件解析
import './js/svg.js';

const app = createApp(App);
// 注入axios 
// app.config.globalProperties.$axios = axios;

app
  .use(cookie)
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueI18n)
  .component("SvgIcon", SvgIcon)
  .mount("#app");