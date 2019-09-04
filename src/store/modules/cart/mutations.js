export default {

  ADD_ITEM(state, item) {
    const itemsMap = new Map(state.cartItems);
    if (itemsMap.has(item)) {
      const amount = itemsMap.get(item);
      itemsMap.set(item, amount + 1);
    } else {
      itemsMap.set(item, 1);
    }
    state.cartItems = Array.from(itemsMap);
  },

  REMOVE_ITEM(state, item) {
    const itemsMap = new Map(state.cartItems);
    if (itemsMap.has(item)) {
      const amount = itemsMap.get(item);
      if (amount - 1 > 0) {
        itemsMap.set(item, amount - 1);
      } else {
        itemsMap.delete(item);
      }
    }
    state.cartItems = Array.from(itemsMap);
  },

  ADD_GUEST(state) {
    state.totalGuests += 1;
  },

  REMOVE_GUEST(state) {
    if (state.totalGuests > 0) {
      state.totalGuests -= 1;
    }
  },

};
