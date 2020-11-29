import Vue from "vue";
import Router from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import Layout from "./Layout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/app",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/",
          name: "crud",
          component: () => import("./pages/Principal.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
