import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import sanitize from 'vue-sanitize'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  sanitize,
  render: h => h(App)
}).$mount('#app')
