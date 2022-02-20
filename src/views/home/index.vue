<template>
  <div>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/containers/header'
import Footer from '@/containers/footer'

export default {
    name:"Home",
    components: {
      Header,
      Footer,
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>