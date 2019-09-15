<template>
  <v-card>
    <v-card-title>
      <span>{{ item.name }}</span>
    </v-card-title>
    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-content>
          <v-list-tile-title>price: {{ item.price }} р.</v-list-tile-title>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <v-btn small outline fab color="teal" @click="addToCart({ item, amount: 1 })">
          + 1
        </v-btn>
        <v-btn small outline fab color="teal" @click="addToCart({ item, amount: 5 })">
          + 5
        </v-btn>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WeddingMenuCategoryItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(amount) {
      this.$emit('add-to-cart', amount);
    },
  },
};
</script>
