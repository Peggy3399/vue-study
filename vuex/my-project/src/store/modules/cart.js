import * as types from '../mutations-types';
import shop from '../../api/shop';

const state = {
  added: [],
  checkoutStatus: null
};

const getters = {
  checkoutStatus: state => state.checkoutStatus
}

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(product => product.id);
    if(!record){
      state.added.push({
        id,
        quantity: 1
      });
    } else {
      record.quantity ++;
    }
  }
};

const actions = {
  checkout ({ commit }, products){
    commit(types.ADD_TO_CART)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
