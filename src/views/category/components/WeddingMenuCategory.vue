<template>
  <v-container v-if="items">
    <v-layout row wrap>
      <v-data-iterator
        :items="items"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
      >
        <template v-slot:item="props">
          <v-flex
            xs12
            sm6
            md4
          >
            <wedding-menu-category-item :item="props.item" @add-to-cart="addToCart" />
          </v-flex>
        </template>
      </v-data-iterator>
    </v-layout>
  </v-container>
</template>

<script>
import WeddingMenuCategoryItem from './WeddingMenuCategoryItem.vue';

export default {
  name: 'WeddingMenuCategory',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    WeddingMenuCategoryItem,
  },
  data: () => ({
    rowsPerPageItems: [9],
    pagination: {
      rowsPerPage: 9,
    },
  }),
  methods: {
    addToCart(order) {
      this.$emit('add-to-cart', order);
    },
  },
};
</script>
