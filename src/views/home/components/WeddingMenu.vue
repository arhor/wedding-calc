<template>
  <div>
    <v-card>
      <v-card-title text-xs-center>
        <span class="title font-weight-light">Menu</span>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-group
            v-for="(item, i) in items"
            :key="`dish-${i}`"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.category }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-group
              v-for="(subitem, i) in item.items"
              :key="`sub-${i}`"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ subitem.category }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
              <v-list-tile
                v-for="(dish, i) in subitem.items"
                :key="`meal-${i}`"
                @click="addToCart(dish)"
              >
                <v-list-tile-content>
                  <v-layout row wrap>
                    <v-flex xs9>{{ dish.name }}</v-flex>
                    <v-flex xs2>{{ dish.amount }}/{{ dish.unit }}</v-flex>
                    <v-flex xs1>{{ dish.price }}</v-flex>
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
export default {
  name: 'WeddingMenu',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item);
    },
  },
};
</script>
