<template>
  <h1 v-if="size === '1'" 
  :style="style" 
  :class="classes">
    {{ text }}
  </h1>
  <h2 v-else-if="size === '2'" 
  :style="style" 
  :class="classes">
    {{ text }}
  </h2>
  <h3 v-else-if="size === '3'" 
  :style="style" 
  :class="classes">
    {{ text }}
  </h3>
  <h4 v-else-if="size === '4'" 
  :style="style" 
  :class="classes">
    {{ text }}
  </h4>
  <h5 v-else-if="size === '5'" 
  :style="style" 
  :class="classes">
    {{ text }}
  </h5>
  <h6 v-else-if="size === '6'" 
  :style="style" 
  :class="classes">
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
   size: {
      type: String,
      default: '1',
      validator: function (value) {
        return ['1', '2', '3', '4', '5', '6'].indexOf(value) !== -1;
      },
   },
   textColor:{
     type: String,
   },
   usage:{
       type: String,
       default: 'greetingTitle',
       validator: function(value){
           return ['greetingTitle', 'loginTitle', 'homeFirstTitle', 'homeTitle'].indexOf(value) !== -1
       }
   }

 },

 computed:{

     classes(){
         return{
             [`${this.usage}`]: true
         }
     },
     style(){
         return{
             color: this.textColor
         }
     }
 }
}
</script>

<style scoped>
.greetingTitle{
    font-size: 60px;
    font-weight: 400;
    margin: 0;
}
.loginTitle{
    font-size: 30px;
    font-weight: 400;
    margin: 0;
}
.firstTitle{
    font-size: 36px;
    font-weight: 700;
    margin: 0;
}
.homeTitle{
    font-size: 64px;
    font-weight: 700;
    margin: 0;
}
</style>