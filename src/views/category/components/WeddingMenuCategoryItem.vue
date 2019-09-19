<template>
  <v-card>
    <v-card-title>
      <span>{{ item.name }}</span>
    </v-card-title>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>price: {{ item.price }} р.</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-btn x-small outlined fab color="teal" @click="addToCart({ item, amount: 1 })">
          + 1
        </v-btn>
        <v-btn x-small outlined fab color="teal" @click="addToCart({ item, amount: 5 })">
          + 5
        </v-btn>
      </v-list-item>
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
