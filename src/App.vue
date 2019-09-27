<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <wedding-menu></wedding-menu>
    </v-navigation-drawer>
    <v-app-bar color="cyan" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <v-btn text to="/">
          Wedding calc
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <wedding-cart></wedding-cart>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <span class="px-3">Maksim Buryshynets &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import WeddingCart from '@/components/WeddingCart.vue';
import WeddingMenu from '@/components/WeddingMenu.vue';

export default {
  name: 'App',
  components: {
    WeddingCart,
    WeddingMenu,
  },
  data: () => ({
    drawer: false,
    saver: null,
  }),
  beforeCreate() {
    this.$store.dispatch('menu/load');
    this.$store.dispatch('cart/load');

    this.saver = setInterval(() => {
      this.$store.dispatch('cart/materialize');
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.saver);
  },
};
</script>
