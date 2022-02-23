<template>
  <div>
      <div id="box">
            <div>
                <Title size=2 text="Olá," greetingTitle=true />
                <TextContent text="Para continuar navegando
                de forma segura, efetue o login na rede." greeting=true />
            </div> 
        <form @submit.prevent="checkLogin">
                <Title size=3 text="Login" loginTitle=true />
                <Input type="text" 
                sample="Usuário" 
                icon="user"/>
                <Input type="password" 
                sample="Senha" 
                icon="lock"/>
                <TextContent text="Ops, usuário ou senha inválidos. Tente novamente!"
                loginError=true />
                <Input type="submit"
                submit=true />
        </form>
      </div>
  </div>
</template>

<script>

import Input from '@/components/input'
import TextContent from '@/components/textContent'
import Title from '@/components/title'
import { mapActions } from 'vuex'



export default {
    name: "LoginLeft",
    components:{
        Input,
        TextContent,
        Title
    },
    methods:{
        ...mapActions(['checkLogin']),
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>