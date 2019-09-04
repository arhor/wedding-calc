<template>
  <v-app>
    <v-toolbar color="cyan" dark fixed app>
      <v-toolbar-title>
        Wedding calc
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <wedding-cart></wedding-cart>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import WeddingCart from '@/components/WeddingCart.vue';

export default {
  name: 'App',
  components: {
    WeddingCart,
  },
  mounted() {
    this.$store.dispatch('menu/load');
  },
};
</script>
