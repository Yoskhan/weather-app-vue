import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Auth/Login.vue";
import Weather from "../components/Weather/Weather.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next("/login");
      } else {
        next("/weather");
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next(false);
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
