<template>
  <p> {{ text }} </p>
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
      usage:{
        type: String,
      },

    },

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>