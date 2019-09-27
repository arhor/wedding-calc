<template>
  <v-row align="center">
    <v-col class="px-3">
      <strong>Total price:</strong> {{ price.toFixed(2) }}
    </v-col>
    <v-col class="px-3">
      <strong>Per guest:</strong> {{ pricePerGuest }}
    </v-col>
    <v-col class="px-3">
      <strong>Guests:</strong> {{ guests }}
    </v-col>
    <v-btn text icon small color="primary" @click="removeGuest">
      <v-icon dark>remove</v-icon>
    </v-btn>
    <v-btn text icon small color="pink" @click="addGuest">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-btn icon large @click="displayCart" >
      <v-icon large>shopping_cart</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'WeddingCartInfo',
  props: {
    price: {
      type: Number,
      default: 0,
    },
    guests: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    pricePerGuest() {
      const result = (this.guests > 0)
        ? this.price / this.guests
        : 0;
      return result.toFixed(2);
    },
  },
  methods: {
    addGuest() {
      this.$emit('add-guest');
    },
    removeGuest() {
      this.$emit('remove-guest');
    },
    displayCart() {
      this.$emit('display-cart');
    },
  },
};
</script>
