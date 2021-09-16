import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Auth/Login.vue";
import WeatherByCity from "../components/Weather/WeatherByCity.vue";
import WeatherByDay from "../components/Weather/WeatherByDay.vue";
import WeatherByHour from "../components/Weather/WeatherByHour.vue";
import WeatherFavorites from "../components/Weather/WeatherFavorites.vue";

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
    component: WeatherByCity,
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/weather/favorites",
    name: "WeatherFavorites",
    component: WeatherFavorites,
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/weather/:city",
    name: "WeatherByCity",
    component: WeatherByDay,
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/weather/:city/:day",
    name: "WeatherByHour",
    component: WeatherByHour,
    beforeEnter: (to, from, next) => {
      let xToken = null;
      xToken = window.localStorage.getItem("xToken");

      if (!xToken) {
        next("/login");
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
