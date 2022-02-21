<template>
  <p :class="{
    greeting: greetingData,
    temperature: temperatureData,
    date: dateData,
    location: locationData,
    homeParagraph: homeParagraphData,
    footerText: footerTextData,
    timerText: timerTextData,
    continueText: continueTextData,
  }"> {{ text }} </p>
</template>

<script>
export default {
    name: 'TextContent',
    props:{
      text:{
        type: String,
        required: true,
        default: 'Sample',
      },
      greeting:{
        default: false,
      },
      temperature:{
        default: false,
      },
      date:{
        default: false,
      },
      location:{
        default: false,
      },
      homeParagraph:{
        default: false,
      },
      footerText:{
        default: false,
      },
      timerText:{
        default: false,
      },
      continueText:{
        default: false,
      },
      



    },

    data(){
      return{
        greetingData: this.greeting,
        temperatureData: this.temperature,
        dateData: this.date,
        locationData: this.location,
        homeParagraphData: this.homeParagraph,
        footerTextData: this.footerText,
        timerTextData: this.timerText,
        continueTextData: this.continueText,
      }
    },

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>