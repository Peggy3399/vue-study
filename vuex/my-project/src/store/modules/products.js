import * as types from '../mutation-types';
import shop from '../../api/shop';

const state = {
  all: []
};

const getters = {
  allProducts: state => state.all
};

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts (products => {
      commit (types.RECEIVE_PRODUCTS, { products })
    })
  }
};

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products;
  }
};


export default {
  state,
  actions,
  mutations,
  getters
}
