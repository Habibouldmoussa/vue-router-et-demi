import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../Page.vue";

Vue.use(VueRouter);

const Routes = [{ path: "/page", component: Page }];

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});
export default router;
