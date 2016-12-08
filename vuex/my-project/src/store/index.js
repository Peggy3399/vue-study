import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
// import * as getters from './getters';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    products
  }
});
