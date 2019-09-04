import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/index';
import './plugins/vuetify';
import './assets/style/main.scss';

Vue.filter('shorten', (value, length) => {
  const maxLength = length || 50;
  if (value && value.length > maxLength) {
    return value.substring(0, maxLength).concat('...');
  }
  return value;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
