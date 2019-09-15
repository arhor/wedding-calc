export default {

  ADD_ITEM: (state, order) => {
    const itemsMap = new Map(state.cartItems);
    const amount = itemsMap.get(order.item);
    itemsMap.set(order.item, (amount || 0) + order.amount);
    state.cartItems = Array.from(itemsMap);
  },

  REMOVE_ITEM: (state, item) => {
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

};
