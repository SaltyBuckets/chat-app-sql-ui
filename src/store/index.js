import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {},
  actions: {},
  modules: {
    // @ts-ignore
    auth: auth,
  },
});
