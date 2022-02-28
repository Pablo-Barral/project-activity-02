<template>
  <p :class="{
    greeting: greeting,
    temperature: temperature,
    date: date,
    location: location,
    homeParagraph: homeParagraph,
    footerText: footerText,
    timerText: timerText,
    continueText: continueText,
    loginError: loginErrorData,
    visible: loginError
  }"> {{ text }} </p>
</template>

<script>
import { mapState } from 'vuex'
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
      loginErrorText:{
        default: false,
      }
    },

    data(){
      return{
        loginErrorData: this.loginErrorText
      }
    },
    computed:{
      ...mapState(['loginError'])
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>