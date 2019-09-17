<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <wedding-menu/>
    </v-navigation-drawer>
    <v-app-bar color="cyan" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <v-btn text to="/">
          Wedding calc
        </v-btn>
      </v-toolbar-title>
      <v-spacer/>
      <wedding-cart/>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="cyan" dark fixed app>
      <v-spacer/>
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
  }),
  beforeCreate() {
    this.$store.dispatch('menu/load');
  },
};
</script>
