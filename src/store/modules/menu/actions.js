export default {

  load: async ({ commit }) => {
    const module = await import('@/assets/data/menu.json');
    commit('SET_MENU', module.default);
  },

};
