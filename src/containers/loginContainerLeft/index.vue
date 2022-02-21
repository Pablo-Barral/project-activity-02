<template>
  <div>
      <div id="box">
            <div>
                <Title size=2 text="Olá," greetingTitle=true />
                <TextContent text="Para continuar navegando
                de forma segura, efetue o login na rede." greeting=true />
            </div> 
        <form>
                <Title size=3 text="Login" loginTitle=true />
                <Input type="text" 
                sample="Usuário" 
                icon="user"/>
                <Input type="password" 
                sample="Senha" 
                icon="lock"/>
                <Input type="submit"
                submit=true
                innerText="Continuar" />
        </form>
      </div>
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