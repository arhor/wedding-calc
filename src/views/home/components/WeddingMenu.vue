<template>
  <div>
    <v-card>
      <v-card-title text-xs-center>
        <span class="title font-weight-light">Menu</span>
      </v-card-title>
      <v-card-text>
        <v-list>
        <v-list-group
          v-for="(dish, i) in all"
          :key="`dish-${i}`"
          no-action
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ dish.category }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-group
            v-for="(sub, i) in dish.items"
            :key="`sub-${i}`"
            no-action
            sub-group
            value="true"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ sub.subcategory }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile
              v-for="(meal, i) in sub.items"
              :key="`meal-${i}`"
            >
              <v-list-tile-content>
                <v-layout row>
                  <v-flex xs8>{{ meal.name }}</v-flex>
                  <v-flex xs4>{{ meal.amount }}/{{ meal.unit }}</v-flex>
                  <v-flex xs4>{{ meal.price }}</v-flex>
                </v-layout>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'WeddingMenu',
  computed: {
    ...mapState('menu', ['all']),
  },
};
</script>
