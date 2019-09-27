<template>
  <v-container v-if="items">
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="6"
      class="elevation-1"
    >
      <template v-slot:item.amount="{ item }">
        {{ item.amount }} {{ item.unit }}
      </template>
      <template v-slot:item.action="{ item }">
        <v-row align="center" justify="center">
          <add-to-cart :item="item" @add-to-cart="addToCart"/>
          <add-to-cart :item="item" :amount="5" @add-to-cart="addToCart"/>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import AddToCart from './AddToCart.vue';

export default {
  name: 'WeddingMenuCategory',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    AddToCart,
  },
  data: () => ({
    itemsPerPageOptions: [9],
    itemsPerPage: 9,
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name',
        width: 650,
      },
      {
        text: 'Amount per portion',
        align: 'center',
        sortable: false,
        value: 'amount',
      },
      {
        text: 'Price',
        align: 'left',
        value: 'price',
      },
      {
        text: 'Actions',
        sortable: false,
        align: 'center',
        value: 'action',
      },
    ],
  }),
  methods: {
    addToCart(order) {
      this.$emit('add-to-cart', order);
    },
  },
};
</script>
