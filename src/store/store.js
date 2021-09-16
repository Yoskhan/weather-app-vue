import Vue from "vue";
import Vuex from "vuex";

import myCities from "../utils/citiesData";

import { getCityData } from "../services/httpRequests";
import { getCityWeekData } from "../services/httpRequests";
import { getByHourData } from "../services/httpRequests";
import { getFavoriteCitiesData } from "../services/httpRequests";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authenticated: false,
    xToken: "",
    favorites: [],
    myCities: myCities,
    citiesForecast: [],
    cityWeekForecast: [],
    byDayForecastData: {},
    updateComponents: false,
  },
  getters: {
    getCityById: (state) => (id) => {
      return state.citiesForecast.find((city) => city.id == id);
    },
    isFavorite: (state) => (id) => {
      return state.favorites.some((favorite) => favorite.id == id);
    },
  },
  mutations: {
    updateComponents(state) {
      state.updateComponents = !state.updateComponents;
    },
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
      let index = state.citiesForecast.findIndex((c) => c.id === cityId);
      state.citiesForecast.splice(index, 1);

      let i = state.myCities.findIndex((c) => c.id === cityId);
      state.myCities.splice(i, 1);
    },
    addCityToFavorites(state, city) {
      state.favorites.push(city);
    },
    removeCityFromFavorites(state, city) {
      let index = state.favorites.findIndex((i) => {
        return i.id == city.id;
      });
      console.log(index);
      state.favorites.splice(index, 1);
    },
    setCitiesForecast(state, citiesForecast) {
      state.citiesForecast = citiesForecast;
    },
    setFavoriteCitiesForecast(state, newFavorites) {
      state.favorites = newFavorites;
    },
    setCityWeekForecast(state, cityWeekForecast) {
      state.cityWeekForecast = cityWeekForecast;
    },
    setByDayForecastData(state, byDayForecastData) {
      state.byDayForecastData = byDayForecastData;
    },
  },
  actions: {
    getCitiesForecast({ commit }) {
      let citiesForecast = [];

      this.state.myCities.forEach((city) => {
        getCityData(city).then((res) => {
          citiesForecast.push(res);
        });
      });

      commit("setCitiesForecast", citiesForecast);
    },
    getFavoriteCitiesForecast({ commit }) {
      let newFavorites = [];

      this.state.favorites.forEach((city) => {
        getFavoriteCitiesData(city).then((res) => {
          newFavorites.push(res);
        });
      });

      commit("setFavoriteCitiesForecast", newFavorites);
    },
    getCityWeekForecast({ commit }, city) {
      getCityWeekData(city).then((res) => {
        commit("setCityWeekForecast", res);
      });
    },
    getByHourForecast({ commit }, cityData) {
      getByHourData(cityData.id, cityData.daySelected).then((res) => {
        commit("setByDayForecastData", res);
      });
    },
  },
});
