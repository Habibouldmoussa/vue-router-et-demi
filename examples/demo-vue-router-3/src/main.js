import Vue, { h } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import plugin from "../libs/admin/index.js";

Vue.use(plugin, { router: router });

const app = new Vue({
  router,
  render: () => h(App),
});

app.$mount("#app");
