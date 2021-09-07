import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Auth/Login.vue";
import Weather from "../components/Weather/Weather.vue";
import {store} from "../store/store" 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login",
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
      if (store.state.authenticated === false) {
        console.log(store.state.authenticated)
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
