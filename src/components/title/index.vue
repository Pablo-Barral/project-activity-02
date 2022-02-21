<template>
  <h1 v-if="size === '1'" :style="{color: textColor}">
    {{ text }}
  </h1>
  <h2 v-else-if="size === '2'" :style="{color: textColor}">
    {{ text }}
  </h2>
  <h3 v-else-if="size === '3'" :style="{color: textColor}">
    {{ text }}
  </h3>
  <h4 v-else-if="size === '4'" :style="{color: textColor}">
    {{ text }}
  </h4>
  <h5 v-else-if="size === '5'" :style="{color: textColor}">
    {{ text }}
  </h5>
  <h6 v-else-if="size === '6'" :style="{color: textColor}">
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
   }

 }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>