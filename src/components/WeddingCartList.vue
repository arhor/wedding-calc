<template>
  <v-card>
    <v-card-text>
      <v-list v-if="items">
        <v-list-tile
          v-for="(item, i) in items"
          :key="`cartItem-${i}`"
          @click="removeItem(item[0])"
        >
          <v-list-tile-content class="caption">
            <v-list-tile-title>
              <v-layout row wrap>
                <v-flex xs9>
                  <p>{{ item[0].name | shorten }}</p>
                </v-flex>
                <v-flex xs1>
                  {{ item[1] }}
                </v-flex>
                <v-flex xs2>
                  {{ amountPerGuest(item) }}
                </v-flex>
              </v-layout>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'WeddingCartList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    guests: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    removeItem(item) {
      this.$emit('remove-item', item);
    },
    amountPerGuest(dish) {
      const { amount, unit } = dish[0];
      const totalAmount = dish[1];
      const perGuest = (this.guests > 0)
        ? (amount * totalAmount) / this.guests
        : 0;
      return `${perGuest.toFixed(2)} ${unit}`;
    },
  },
};
</script>
