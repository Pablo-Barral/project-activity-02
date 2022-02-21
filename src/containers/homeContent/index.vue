<template>
  <div>
      <img src="@/assets/ball-LogoCompass.png" alt="Compass logo">
      <div>
          <div id="firstParagraph">
            <Title size=2 text="Our mission is" textColor="#C12D18"/>
            <TextContent homeParagraph=true text="Nossa missão é"/>
          </div>
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