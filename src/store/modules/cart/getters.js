export default {

  totalPrice(state) {
    return state.cartItems
      .map(it => it[0].price * it[1])
      .reduce((a, b) => a + b, 0);
  },

};
