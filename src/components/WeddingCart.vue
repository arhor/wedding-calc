<template>
  <div>
    <wedding-cart-info
      :price="totalPrice"
      :guests="totalGuests"
      @add-guest="addGuest"
      @remove-guest="removeGuest"
      @display-cart="display = true"
    />
    <v-dialog v-model="display" max-width="800px">
      <wedding-cart-list
        :items="cartItems"
        :guests="totalGuests"
        @remove-item="removeItem"
      />
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import WeddingCartInfo from './WeddingCartInfo.vue';
import WeddingCartList from './WeddingCartList.vue';

export default {
  name: 'WeddingCart',
  components: {
    WeddingCartInfo,
    WeddingCartList,
  },
  data: () => ({
    display: false,
  }),
  computed: {
    ...mapState('cart', ['cartItems']),
    ...mapState('guests', ['totalGuests']),
    ...mapGetters('cart', ['totalPrice']),
  },
  methods: {
    ...mapActions('cart', ['removeItem']),
    ...mapActions('guests', [
      'addGuest',
      'removeGuest',
    ]),
  },
};
</script>
