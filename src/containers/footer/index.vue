<template>
  <footer>
      <TextContent :style="{'grid-column': 2}" footerText=true 
      text="Essa janela do navegador
       é usada para manter sua sessão de autenticação ativa. 
       Deixe-a aberta em segundo plano e abra uma nova janela para 
       continuar a navegar."/>
       <span/>
       <TextContent :style="{'grid-column': 4, 'text-align': 'right'}" timerText=true text="Application refresh in" />
       <div :style="{'grid-column': 6}" id="timerBox">
           <div>{{ seconds }}</div>
           <TextContent timerText=true text="seconds" />
       </div>
       <TextContent id="continueText"  :style="{'grid-column': 7}" continueText=true text="Continuar Navegando" />
       <button :style="{'grid-column': 8}">Logout</button>
  </footer>
</template>

<script>

import TextContent from '@/components/textContent'

export default {
    name: "Footer",
    components:{
        TextContent
    },

    data(){
        return{
            seconds: 600
        }
    },



}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>