<template>
  <v-card>
    <v-card-title>
      <v-layout row>
        <v-flex xs2>
          <span>Guest</span>
        </v-flex>
        <v-flex xs5>
          <strong>Total:</strong> {{ totalGuests }}
          <span @click="addGuest">+</span>
          /
          <span @click="removeGuest">-</span>
        </v-flex>
        <v-flex xs5>
          <strong>Price:</strong> {{ pricePerGuest }}
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-list v-if="items">
        <v-list-tile
          v-for="(item, i) in items"
          :key="`guestItem-${i}`"
        >
          <v-list-tile-content>
            <v-layout row>
              <v-flex xs10>
                {{ item[0].name }}
              </v-flex>
              <v-flex xs2>
                {{ amountPerGuest(item) }}
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
  name: 'WeddingGuest',
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
  data() {
    return {
      totalGuests: 0,
    };
  },
  computed: {
    pricePerGuest() {
      return (this.totalGuests > 0)
        ? this.totalPrice / this.totalGuests
        : 0;
    },
  },
  methods: {
    addGuest() {
      this.totalGuests += 1;
    },
    removeGuest() {
      if (this.totalGuests > 0) {
        this.totalGuests -= 1;
      }
    },
    amountPerGuest(dish) {
      const { amount, unit } = dish[0];
      const totalAmount = dish[1];
      const perGuest = (this.totalGuests > 0)
        ? (amount * totalAmount) / this.totalGuests
        : 0;
      return `${perGuest} ${unit}`;
    },
  },
};
</script>
