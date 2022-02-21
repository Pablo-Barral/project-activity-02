<template>
  <h1 v-if="size === '1'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
  }">
    {{ text }}
  </h1>
  <h2 v-else-if="size === '2'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
  }">
    {{ text }}
  </h2>
  <h3 v-else-if="size === '3'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
  }">
    {{ text }}
  </h3>
  <h4 v-else-if="size === '4'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
  }">
    {{ text }}
  </h4>
  <h5 v-else-if="size === '5'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
  }">
    {{ text }}
  </h5>
  <h6 v-else-if="size === '6'" 
  :style="{color: textColor}" 
  :class="{
    firstTitle: homeFirstTitleData,
    homeTitleStyle: homeTitleData
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
   homeFirstTitle:{
     default: false,
   },
   homeTitle:{
     default: false,
   },

 },

 data(){
   return{
     homeFirstTitleData: this.homeFirstTitle,
     homeTitleData: this.homeTitle
   }
 },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>