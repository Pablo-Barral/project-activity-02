<template>
  <div>
      <Title text="401" size='1' />
      <TextContent text="Unauthorized" />
      <TextContent id="redirect" text="Redirecting..." />
  </div>
</template>

<script>

import Title from '@/components/title'
import TextContent from '@/components/textContent'
import router from '@/router'

export default {
    name: "unauthorized",
    components:{
        Title,
        TextContent,
    },

    methods:{
        redirect(){
            router.push('/login')
        }
    },
    mounted(){
        setTimeout(this.redirect, 5000)
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>