<template>
  <div>
    <LoginLeft/>
    <LoginRight/>
  </div>
</template>

<script>

import LoginLeft from '@/containers/loginContainerLeft'
import LoginRight from '@/containers/loginContainerRight'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
name:"Login",
components:{
  LoginLeft,
  LoginRight
},
computed:{
...mapState(['user', 'password'])
},
methods:{
...mapMutations(['setUser', 'setPassword']),
...mapActions(['checkLogin']),
autoLogin(){
  if(localStorage.getItem("user") && localStorage.getItem('password')){
    this.setUser(localStorage.getItem("user"))
    this.setPassword(localStorage.getItem('password'))
    this.checkLogin()
  }
},
autoSet(){
  if(localStorage.getItem("user") && localStorage.getItem('password')){
    this.setUser(localStorage.getItem("user"))
    this.setPassword(localStorage.getItem('password'))
  }
}
},
mounted(){
  this.autoSet()
  setTimeout(this.autoLogin, 5000)
}
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>