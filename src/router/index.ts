import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Startseite",
    component: Home,
  },
  {
    path: "/inventory",
    name: "Katalog",
    component: () => import("../views/Inventory.vue"),
  },
  {
    path: "/about",
    name: "Über uns",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
