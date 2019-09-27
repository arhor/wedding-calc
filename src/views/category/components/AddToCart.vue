<template>
  <v-btn
    x-small
    outlined
    fab
    color="teal"
    @click="addToCart({ item, amount })"
    class="mx-1"
  >
    + {{ amount }}
  </v-btn>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    item: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    addToCart(order) {
      if (order && order.item) {
        this.$emit('add-to-cart', order);
      }
    },
  },
};
</script>
