import Vue            from 'vue/dist/vue.min.js'
import { router }     from './router/router'
import store          from './store'
import VueResource    from 'vue-resource'
import GitHubAPI      from 'vue-github-api'
import App            from './App.vue'
import TrendChart     from "vue-trend-chart";

Vue.use(VueResource)
Vue.use(GitHubAPI, { token: '5b82185450e1527059aecc1d1cc72b4a5edb9daf' })
Vue.use(TrendChart);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
