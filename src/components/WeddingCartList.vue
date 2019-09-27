<template>
  <v-list v-if="items">
    <v-list-item
      v-for="(item, i) in items"
      :key="`cartItem-${i}`"
      @click="removeItem(item[0])"
    >
      <v-list-item-content class="caption">
        <v-list-item-title>
          <v-row wrap>
            <v-col cols="9">
              <p>{{ item[0].name | shorten }}</p>
            </v-col>
            <v-col cols="1">
              {{ item[1] }}
            </v-col>
            <v-col cols="2">
              {{ amountPerGuest(item) }}
            </v-col>
          </v-row>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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
      let normalizedAmount;
      switch (typeof amount) {
        case 'number':
          normalizedAmount = amount;
          break;
        case 'string':
          normalizedAmount = amount
            .split('/')
            .map(x => Number(x))
            .reduce((a, b) => a + b, 0);
          break;
        default:
          normalizedAmount = 0;
          break;
      }
      const perGuest = (this.guests > 0)
        ? (normalizedAmount * totalAmount) / this.guests
        : 0;
      return `${perGuest.toFixed(2)} ${unit}`;
    },
  },
};
</script>
