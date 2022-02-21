<template>
  <div>
      <Title size=2 text="Olá," greetingTitle=true />
      <TextContent text="Para continuar navegando
       de forma segura, efetue o login na rede." greeting=true />
      <form>
            <Title size=3 text="Login" loginTitile=true />
            <Input type="text" 
            sample="Usuário" 
            icon="@/assets/user.png"/>
            <Input type="password" 
            sample="Senha" 
            icon="@/assets/lock.png"/>
            <Input type="submit" 
            text="Continuar" />
      </form>
  </div>
</template>

<script>

import Input from '@/components/input'
import TextContent from '@/components/textContent'
import Title from '@/components/title'



export default {
    name: "LoginLeft",
    components:{
        Input,
        TextContent,
        Title
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>