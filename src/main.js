import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource); // 用use方法注册然后使用

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: resolve => require(['./components/goods/goods.vue'], resolve)
    },
    {
      path: '/ratings',
      component: resolve => require(['./components/ratings/ratings.vue'], resolve)
    },
    {
      path: '/seller',
      component: resolve => require(['./components/seller/seller.vue'], resolve)
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
