<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs11>
      <wedding-menu :items="menuItems" @add-to-cart="addItem" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import WeddingMenu from './components/WeddingMenu.vue';

export default {
  name: 'Home',
  components: {
    WeddingMenu,
  },
  computed: {
    ...mapState('menu', ['menuItems']),
  },
  methods: {
    ...mapActions('cart', ['addItem']),
  },
};
</script>
