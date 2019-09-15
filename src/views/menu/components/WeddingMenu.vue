<template>
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
            >
              <v-list-tile-content class="body-1">
                <v-list-tile-title>
                  <v-layout row wrap>
                    <v-flex xs9>{{ dish.name | shorten(75) }}</v-flex>
                    <v-flex xs2>{{ dish.amount }} {{ dish.unit }}</v-flex>
                    <v-flex xs1>{{ dish.price }}</v-flex>
                  </v-layout>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn outline fab small color="pink" @click="addToCart(dish) ">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn outline fab small color="pink" @click="addToCart(dish, 5) ">
                  <v-icon dark>add</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card-text>
  </v-card>
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
    addToCart(item, amount) {
      const order = { item, amount: (amount || 1) };
      this.$emit('add-to-cart', order);
    },
  },
};
</script>
