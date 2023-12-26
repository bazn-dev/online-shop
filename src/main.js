import Vue from 'vue';
import VueRouter from 'vue-router';
import Toasted from 'vue-toasted';
// import Cookie from 'js-cookie';
import router from './router';
// import instance from '@/api/axios';
import App from './App.vue';

import './assets/styles/icons.css'
import './assets/styles/main.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Toasted)

// instance.interceptors.request.use(async (config) => {
//   console.log(config)
//   config.headers['Cookie'] =
//     `userId=${Cookie.get('userId')}; orderId=${Cookie.get('orderId')}`;
//   return config;
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
