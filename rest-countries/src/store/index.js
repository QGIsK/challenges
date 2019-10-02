/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    countries: []
  },
  mutations: {
    getCountries(state, { countries }) {
      state.countries = countries;
    }
  },
  actions: {
    getCountries({ commit }) {
      Axios({
        url: "https://restcountries.eu/rest/v2/all",
        method: "GET"
      }).then(res => {
        console.log(res);
      });

      commit("getCountries", countries);
    }
  },
  getters: {
    countries: state => state.countries
  }
});
