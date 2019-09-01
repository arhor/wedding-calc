<template>
  <v-container flex grid-list-md>
    <v-layout row wrap>
      <v-flex xs7>
        <wedding-menu
          :items="menuItems"
          @add-to-cart="addItem"
        />
      </v-flex>
      <v-flex xs5>
        <v-layout row wrap>
          <v-flex xs12>
            <wedding-cart
              :items="cartItems"
              :totalPrice="totalPrice"
              @remove-from-cart="removeItem"
            />
          </v-flex>
          <v-flex xs12>
            <wedding-guest
              :items="cartItems"
              :totalPrice="totalPrice"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import WeddingCart from './components/WeddingCart.vue';
import WeddingGuest from './components/WeddingGuest.vue';
import WeddingMenu from './components/WeddingMenu.vue';

export default {
  name: 'Home',
  components: {
    WeddingCart,
    WeddingGuest,
    WeddingMenu,
  },
  computed: {
    ...mapState('menu', ['menuItems']),
    ...mapState('cart', ['cartItems']),
    ...mapGetters('cart', ['totalPrice']),
  },
  methods: {
    ...mapActions('cart', [
      'addItem',
      'removeItem',
    ]),
  },
};
</script>
