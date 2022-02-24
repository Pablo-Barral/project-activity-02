<template>
  <div>
      <Title text="404" size='1' />
      <TextContent text="Page not found" />
  </div>
</template>

<script>

import Title from '@/components/title'
import TextContent from '@/components/textContent'

export default {
    name: "NotFound",
    components:{
        Title,
        TextContent,
    },

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>