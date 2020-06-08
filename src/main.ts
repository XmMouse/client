import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局sass
import 'assets/scss/global.scss'

// 加载各种插件
import addPlugins from './plugins'
addPlugins(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
