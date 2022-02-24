<template>
  <div>
      <Title text="405" />
      <TextContent text="Redirecting..." />
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
        setTimeout(this.redirect, 6000)
    }
}
</script>

<style>

</style>