import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/index';
import vuetify from './plugins/vuetify';

Vue.filter('shorten', (value, length) => {
  const maxLength = length || 50;
  if (value && value.length > maxLength) {
    return value.substring(0, maxLength).concat('...');
  }
  return value;
});

Vue.filter('reduceWeight', (value) => {
  const weight = value || '';
  return weight.split('/').map(w => Number(w)).reduce((a, b) => a + b, 0);
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
