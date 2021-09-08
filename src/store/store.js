import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    authenticated: false,
    xToken: "",
    cities: ["london", "paris", "berlin", "moscow", "zagreb"],
  },
  getters: {},
  mutations: {
    logInUser(state) {
      state.authenticated = true;
    },
    logOutUser(state) {
      state.authenticated = true;
    },
    saveToken(state, payload) {
      state.xToken = payload;
    },
  },
});
