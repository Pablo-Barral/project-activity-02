<template>
  <span :class="{textSpan: !submitData}">
      <input :type="type" 
      :placeholder="sample" 
      :value="innerText"
      :class="{submit: submitData}">

      <img v-if="icon" 
      :src="require(`@/assets/${iconData}.png`)" 
      alt="Icon">
  </span>
</template>

<script>
export default {
    name: "Input",

    props:{
        type:{
            required: true,
            default: "text",
            type: String,
        },
        sample:{
            type: String,
        },
        icon:{
            type: String,
            default: "",
        },
        innerText:{
            type: String,
            default: "",
        },
        submit:{
            default: false,
        },
    },

    data(){
        return{
            iconData: this.icon,
            submitData: this.submit,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>