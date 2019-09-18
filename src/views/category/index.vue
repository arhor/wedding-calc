<template>
  <v-row v-if="name">
    <v-col cols="12">
      <span class="px-3">{{ name }}</span>
      <v-menu offset-y v-if="hasSubcategories(name)">
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Subcategories
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(subcategory, i) in subcategories(name)"
            :key="`subcategory-${i}`"
            @click="init(subcategory)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ subcategory }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col cols="12">
      <wedding-menu-category
        :items="currentCategory.items"
        @add-to-cart="addItem"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import WeddingMenuCategory from './components/WeddingMenuCategory.vue';

export default {
  name: 'Category',
  components: {
    WeddingMenuCategory,
  },
  computed: {
    ...mapGetters('menu', [
      'menuCategory',
      'hasSubcategories',
      'subcategories',
    ]),
  },
  data() {
    return {
      name: null,
      currentSubcategory: null,
      currentCategory: null,
    };
  },
  beforeMount() {
    this.name = this.$route.query.name;
    this.init(this.subcategories(this.name)[0]);
  },
  methods: {
    ...mapActions('cart', ['addItem']),

    init(subcategory) {
      this.currentSubcategory = subcategory;
      const category = this.menuCategory(this.name);
      if (this.hasSubcategories(this.name)) {
        [this.currentCategory] = category.items
          .filter(_ => _.category === this.currentSubcategory);
      } else {
        this.currentCategory = category;
      }
    },
  },
  watch: {
    $route(to) {
      this.name = to.query.name;
      this.init(this.subcategories(this.name)[0]);
    },
  },
};
</script>
