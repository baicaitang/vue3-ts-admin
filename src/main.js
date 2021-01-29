import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import cookie from "./plugins/cookie";

createApp(App)
  .use(cookie)
  .use(store)
  .use(router)
  .mount("#app");
