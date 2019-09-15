export default {

  totalPrice: state => state.cartItems.map(_ => _[0].price * _[1]).reduce((a, b) => a + b, 0),

};
