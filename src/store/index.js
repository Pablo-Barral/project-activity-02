import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    seconds: 600
  },
  getters: {
    seconds: (state) =>{
      return state.seconds
    }
  },
  mutations: {
    logout(state){
      state.logged = false
      router.push('/login')
      state.seconds = 600
    },
    logIn(state){
      state.logged = true
      router.push('/home')
    },
    minusSecond(state){
      state.seconds--
    }
  },
  actions: {
  },
  modules: {
  }
})
