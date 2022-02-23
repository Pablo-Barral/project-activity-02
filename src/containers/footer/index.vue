<template>
  <footer>
        <div id="footerBox">
            <TextContent :style="{'grid-column': 2}" footerText=true 
            text="Essa janela do navegador
            é usada para manter sua sessão de autenticação ativa. 
            Deixe-a aberta em segundo plano e abra uma nova janela para 
            continuar a navegar."/>
            <span/>
            <TextContent :style="{'grid-column': 4, 'text-align': 'right'}" timerText=true text="Application refresh in" />
            <div :style="{'grid-column': 5}" id="timerBox">
                <Timer/>
                <TextContent timerText=true text="seconds" />
            </div>
            <TextContent id="continueText"  :style="{'grid-column': 7}" continueText=true text="Continuar Navegando" />
            <button @click="logout" :style="{'grid-column': 8}">Logout</button>
        </div>
  </footer>
</template>

<script>

import TextContent from '@/components/textContent'
import Timer from '@/components/timer'
import { mapMutations } from 'vuex'

export default {
    name: "Footer",
    components:{
        TextContent,
        Timer
    },

    methods:{
        ...mapMutations(["logout"])
    }



}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>