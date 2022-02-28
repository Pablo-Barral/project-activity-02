<template>
  <header>
      <img draggable="false" src="../../assets/compassuol-logo-min.png" alt="Compass Logo">
      <Clock aria-label="Data e Hora"/>
      <Weather aria-label="Clima Atual"/>
  </header>
</template>

<script>

import Clock from '@/components/clock'
import Weather from '@/components/weather'

export default {
    name: "Header",
    components:{
        Clock,
        Weather,
    },

    data(){
        return{
        }
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>