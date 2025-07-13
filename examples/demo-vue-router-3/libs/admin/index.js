'use strict';

var vueDemi = require('vue-demi');

const AdminDashboard = {
    name: "AdminDashboard",
    setup() {
        console.log("AdminDashboard setup called");
        const count = vueDemi.ref(1);
        return { count };
    },
    render() {
        return vueDemi.h("h1", `Plugin Component: ${this.count}`);
    },
};

// ---the plugin in self ---
const MyPlugin = {
    install(app, options = {}) {
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

module.exports = MyPlugin;
