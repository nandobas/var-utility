import Vue from "vue";
import VueRouter from "vue-router";
import Controller from "../views/controller/Controller.vue";
import Settings from "../views/settings/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "controller",
    component: Controller,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
