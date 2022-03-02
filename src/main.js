import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueSanitize from 'vue-sanitize'

let defaultOptions = vueSanitize.defaults
defaultOptions = {
  allowedTags: ['p', 'b', 'i', 'strong'],
};
Vue.use(vueSanitize, defaultOptions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
