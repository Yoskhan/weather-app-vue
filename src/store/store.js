import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated: false,
    xToken: "",
    favorites: [],
    cities: [
      {
        id: 2643741,
        name: "City of London",
        state: "",
        country: "GB",
        coord: {
          lon: -0.09184,
          lat: 51.512791,
        },
      },
      {
        id: 2988507,
        name: "Paris",
        state: "",
        country: "FR",
        coord: {
          lon: 2.3486,
          lat: 48.853401,
        },
      },
      {
        id: 2950159,
        name: "Berlin",
        state: "",
        country: "DE",
        coord: {
          lon: 13.41053,
          lat: 52.524368,
        },
      },
      {
        id: 524901,
        name: "Moscow",
        state: "",
        country: "RU",
        coord: {
          lon: 37.615555,
          lat: 55.75222,
        },
      },
      {
        id: 3337532,
        name: "Grad Zagreb",
        state: "",
        country: "HR",
        coord: {
          lon: 15.9773,
          lat: 45.813068,
        },
      },
    ],
  },
  getters: {
    getCityById: (state) => (id) => {
      return state.cities.find((city) => city.id == id);
    },
    isFavorite: (state) => (id) => {
      return state.favorites.some((favorite) => favorite.id == id);
    },
  },
  mutations: {
    logInUser(state) {
      state.authenticated = true;
    },
    logOutUser(state) {
      state.authenticated = false;
    },
    saveToken(state, payload) {
      state.xToken = payload;
    },
    deleteCityById(state, cityId) {
      let index = state.cities.findIndex((c) => c.id === cityId);
      state.cities.splice(index, 1);
    },
    addCityToFavorites(state, city) {
      state.favorites.push(city);
    },
    removeCityFromFavorites(state, city) {
      let index = state.favorites.findIndex((i) =>{ i.id === city.id});
      state.favorites.splice(index, 1);
    },
  },
});
