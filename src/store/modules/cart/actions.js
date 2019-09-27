import * as fs from 'fs';

export default {

  load: ({ commit }) => {
    fs.readFile('./saves/cart.json', (error, data) => {
      if (error) {
        console.error('[ERROR] Loading cart content failed: ', error);
      } else {
        commit('LOAD', JSON.parse(data));
      }
    });
  },

  materialize: ({ commit }) => commit('MATERIALIZE'),

  addItem: ({ commit }, item) => commit('ADD_ITEM', item),

  removeItem: ({ commit }, item) => commit('REMOVE_ITEM', item),

};
