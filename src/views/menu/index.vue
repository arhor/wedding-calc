<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <v-list class="pa-1">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Menu</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider light/>
            <v-list-tile
              v-for="(category, i) in categories"
              :key="`category-${i}`"
              :to="`/category?name=${category}`"
            >
              {{ category }}
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Menu',
  computed: {
    ...mapGetters('menu', ['categories']),
  },
};
</script>
