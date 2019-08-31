<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <wedding-menu />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WeddingMenu from './components/WeddingMenu.vue';

export default {
  name: 'Home',
  components: {
    WeddingMenu,
  },
};
</script>
