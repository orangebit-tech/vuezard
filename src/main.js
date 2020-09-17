import Vue                  from 'vue/dist/vue.min.js'
import { router }           from './router/router'
import store                from './store'
import VueResource          from 'vue-resource'
import GitHubAPI            from 'vue-github-api'
import App                  from './App.vue'
import TrendChart           from "vue-trend-chart";
import Chartkick            from 'vue-chartkick'
import Chart                from 'chart.js'
import { library }          from '@fortawesome/fontawesome-svg-core'
import { fab }              from '@fortawesome/free-brands-svg-icons'
import { fas }              from '@fortawesome/free-solid-svg-icons'
import { far }              from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import VueClipboard         from 'vue-clipboard2'



library.add(fab,fas,far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Chartkick.use(Chart))
Vue.use(VueResource)
Vue.use(GitHubAPI, { token: '5b82185450e1527059aecc1d1cc72b4a5edb9daf' })
Vue.use(VueClipboard)
Vue.use(TrendChart);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
