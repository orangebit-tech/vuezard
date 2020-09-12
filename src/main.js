import Vue from 'vue'
import { router } from './router/router'
import store from './store'
// import VueSocket from "vue-ws";
import App from './App.vue'
// import Vuex from 'vuex'
// Vue.use(VueSocket);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
