import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import addPlugins from './plugin'
addPlugins(Vue)

require('assets/scss/global.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
