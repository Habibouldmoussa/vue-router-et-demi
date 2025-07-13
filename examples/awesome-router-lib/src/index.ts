import { App, Plugin } from "vue-demi";
import { Router } from "vue-router-demi";
import AdminDashboard from "./views/AdminDashboard";

interface MyPluginOptions {
  routes?: Array<any>;
  router?: Router;
}

// ---the plugin in self ---
const MyPlugin: Plugin = {
  install(app: App, options: MyPluginOptions = {}) {
    console.log("MyPlugin installed");
    const router = options.router;
    if (!router) {
      console.error('the plugin needs a "router" option');
      return;
    }
    const pluginRoutes = [
      {
        path: "/admin",
        name: "admin-dashboard",
        component: AdminDashboard,
      },
    ];
    pluginRoutes.forEach((route) => {
      router.addRoute(route);
    });
    console.log("MyPlugin routes added:", pluginRoutes);
  },
};
export default MyPlugin;
