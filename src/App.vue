<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('menu/load');
  },
};
</script>
