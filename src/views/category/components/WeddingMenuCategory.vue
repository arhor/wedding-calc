<template>
  <v-container v-if="items">
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ itemsPerPageOptions }"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="(item, i) in props.items"
            :key="`item-${i}`"
            cols="12"
            sm="6"
            md="4"
          >
            <wedding-menu-category-item
              :item="item"
              @add-to-cart="addToCart"
            />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
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
    itemsPerPageOptions: [9],
    itemsPerPage: 9,
  }),
  methods: {
    addToCart(order) {
      this.$emit('add-to-cart', order);
    },
  },
};
</script>
