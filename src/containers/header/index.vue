<template>
  <header>
      <img src="../../assets/compassuol-logo-min.png" alt="Compass Logo">
      <Clock/>
      <Weather/>
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