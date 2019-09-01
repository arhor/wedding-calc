<template>
  <v-layout v-if="notEmpty" row wrap>
    <v-flex xs12 text-xs-left>
      <strong v-if="title">
        {{ title + ':' }}
      </strong>
      {{ commaSeparatedString }}
    </v-flex>
  </v-layout>
</template>

<script>
import { commaSeparate, notEmptyArray } from '@/utils/ArrayUtils';

export default {
  name: 'GSeq',
  props: {
    title: {
      type: String,
      default: null,
    },
    xs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    notEmpty() {
      return notEmptyArray(this.xs);
    },
    commaSeparatedString() {
      return commaSeparate(this.xs);
    },
  },
};
</script>
