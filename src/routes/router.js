import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/menu'),
    },
    {
      path: '/category',
      name: 'categiry',
      component: () => import('@/views/category'),
    },
  ],
});
