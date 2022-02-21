<template>
  <div>
    <Header/>
    <HomeContent/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/containers/header'
import HomeContent from '@/containers/homeContent'
import Footer from '@/containers/footer'

export default {
    name:"Home",
    components: {
      Header,
      HomeContent,
      Footer,
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>