<template>
  <div>
      <img src="@/assets/ball-LogoCompass.png" alt="Compass logo">
      <div>
          <Title/>
          <TextContent/>
      </div>
  </div>
</template>

<script>

import TextContent from '@/components/textContent'
import Title from '@/components/title'

export default {
    name: "HomeContent",
    components:{
        TextContent,
        Title,
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>