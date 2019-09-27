<template>
  <v-list dense>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider light/>
    <v-list-item
      v-for="(category, i) in categories"
      :key="`category-${i}`"
      :to="`/category/${category}`"
    >
      <v-list-item-content>
        <v-list-item-title>{{ category }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WeddingMenu',
  computed: {
    ...mapGetters('menu', ['categories']),
  },
};
</script>
