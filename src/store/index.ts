import { createStore } from "vuex";

export default createStore({
  state: {
    cdnUrl: process.env.BASE_URL + "cdn/",
  },
  mutations: {},
  actions: {},
  modules: {},
});
