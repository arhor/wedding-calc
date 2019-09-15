export default {

  ADD_GUEST: (state) => {
    state.totalGuests += 1;
  },

  REMOVE_GUEST: (state) => {
    if (state.totalGuests > 0) {
      state.totalGuests -= 1;
    }
  },

};
