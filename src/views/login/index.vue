<template>
  <div>
    <LoginLeft/>
    <LoginRight/>
  </div>
</template>

<script>

import LoginLeft from '@/containers/loginContainerLeft'
import LoginRight from '@/containers/loginContainerRight'

export default {
name:"Login",
components:{
  LoginLeft,
  LoginRight
}
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>