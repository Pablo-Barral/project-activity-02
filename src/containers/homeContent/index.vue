<template>
  <div id="homeBody">
        <img draggable="false" src="@/assets/ball-LogoCompass.png" alt="Compass logo">
        <div id="paragraphBox">
            <div>
                <Title size=2 homeFirstTitle=true text="Our mission is" textColor="#C12D18"/>
                <TextContent homeParagraph=true text="Nossa missão é"/>
            </div>

            <Title size=3 homeTitle=true text="to transform the world" textColor="#C12D18"/>
            <TextContent homeParagraph=true text="transformar o mundo"/>

            <Title size=3 homeTitle=true text="building digital experiences" textColor="#C12D18"/>
            <TextContent homeParagraph=true text="construindo experiências digitais"/>

            <Title size=3 homeTitle=true text="that enable our client’s growth" textColor="#C12D18"/>
            <TextContent homeParagraph=true text="que permitam o crescimento dos nossos clientes"/>            
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