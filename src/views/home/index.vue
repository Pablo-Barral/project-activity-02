<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from '@/containers/header'

export default {
    name:"Home",
    components: {
      Header,
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>