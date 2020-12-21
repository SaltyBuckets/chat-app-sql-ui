// import axios from 'axios';

import store from '..';

const state = {
  username: '',
  uid: '',
  password: '',
};
const getters = {};
const mutations = {
  SET_USERNAME(state, n) {
    state.username = n;
  },
  SET_PASSWORD(state, n) {
    state.password = n;
  },
  SET_UID(state, n) {
    state.uid = n
  }
};
const actions = {
  login(context) {


  }

};

export default {
  state,
  getters,
  actions,
  mutations,
};
