import Vue from "vue";
import Vuex from "vuex";

import myCities from "../utils/citiesData";
import { getData } from "../services/httpRequests";
import { getCityData } from "../services/httpRequests";
import { getCityWeekData } from "../services/httpRequests";
import { getByHourData } from "../services/httpRequests";

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
    data: [],
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
        i.id === city.id;
      });
      state.favorites.splice(index, 1);
    },
    setData(state, data) {
      state.data.push(data);
      console.log("ovo je u stateu", state.data);
    },
    setCitiesForecast(state, citiesForecast) {
      state.citiesForecast = citiesForecast;
    },
    setCityWeekForecast(state, cityWeekForecast) {
      state.cityWeekForecast = cityWeekForecast;
    },
    setByDayForecastData(state, byDayForecastData) {
      state.byDayForecastData = byDayForecastData;
    },
  },
  actions: {
    getBadgeData({ commit }) {
      getData().then((res) => {
        commit("setData", res);
      });
    },
    getCitiesForecast({ commit }) {
      let citiesForecast = [];

      this.state.myCities.forEach((city) => {
        getCityData(city).then((res) => {
          citiesForecast.push(res);
        });
      });
      commit("setCitiesForecast", citiesForecast);
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
