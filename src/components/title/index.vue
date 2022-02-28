<template>
  <h1 v-if="size === '1'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h1>
  <h2 v-else-if="size === '2'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h2>
  <h3 v-else-if="size === '3'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h3>
  <h4 v-else-if="size === '4'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h4>
  <h5 v-else-if="size === '5'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h5>
  <h6 v-else-if="size === '6'" 
  :style="{color: textColor}" 
  :class="{
    greetingTitle: greetingTitle,
    loginTitle: loginTitle,
    firstTitle: homeFirstTitle,
    homeTitleStyle: homeTitle
  }">
    {{ text }}
  </h6>
</template>

<script>
export default {
name:'Title',
 props:{
   text:{
     type: String,
     required: true,
     default: 'Sample Title'
   },
   size:{
     type: String,
     default: '1'
   },
   textColor:{
     type: String,
   },
   greetingTitle:{
     default: false,
   },
   loginTitle:{
     default: false,
   },
   homeFirstTitle:{
     default: false,
   },
   homeTitle:{
     default: false,
   },

 },

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>