<template>
  <v-card>
    <v-card-title>
      <v-layout row>
        <v-flex xs6>
          <span>Cart</span>
        </v-flex>
        <v-flex xs6>
          <strong>Total price:</strong> {{ totalPrice }}
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-list v-if="items">
        <v-list-tile
          v-for="(item, i) in items"
          :key="`cartItem-${i}`"
          @click="removeFromCart(item[0])"
        >
          <v-list-tile-content>
            <v-layout row>
              <v-flex xs10>
                {{ item[0].name }}
              </v-flex>
              <v-flex xs2>
                {{ item[1] }}
              </v-flex>
            </v-layout>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'WeddingCart',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit('remove-from-cart', item);
    },
  },
};
</script>
