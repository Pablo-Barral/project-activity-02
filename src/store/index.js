import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/api/users.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    seconds: 600,
    user: '',
    password: '',
    loginValidated: false,
    loginError: false
  },
  getters: {
    seconds: (state) =>{
      return state.seconds
    }
  },
  mutations: {
    logout(state){
      state.logged = false
      state.loginValidated = false
      router.push('/login')
      state.seconds = 600
    },
    login(state){
      if(state.loginValidated){
        state.logged = true
        state.loginError = false
        router.push('/home')
      }
    },
    minusSecond(state){
      state.seconds--
    },
    setUser(state, user){
      state.user = user
    },
    setPassword(state, password){
      state.password = password
    },
    validateLogin(state){
      state.loginValidated = true
    },
    
    loginError(state){
      state.loginError = true
      state.user = ''
      state.password = ''
    }
  },
  actions: { 
    checkLogin(context){
      users.every(user => {
        if(user.login == this.state.user &&
          user.password == this.state.password){
          console.log("login")
          context.commit('validateLogin')
          context.commit('login')
          return false
       }else{
         return true
       }
      })
      if(!this.state.loginValidated){
        context.commit('loginError')
      }
      },   
  },
  modules: {
  }
})
