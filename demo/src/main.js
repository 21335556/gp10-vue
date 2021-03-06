import Vue from 'vue'
import App from './App.vue'

import router from './router/'
import store from './store/'

import './assets/styles/reset.styl'
import './assets/styles/movie-item.css'
import 'animate.css'

import './filters/img-replace'
import './mixins/scroll'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
