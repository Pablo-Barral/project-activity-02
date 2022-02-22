import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false
  },
  getters: {
  },
  mutations: {
    timeout(state){
      state.logged = false
      router.push('/login')
    },
    logIn(state){
      state.logged = true
    }
  },
  actions: {
  },
  modules: {
  }
})
