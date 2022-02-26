<template>
  <div id="weatherBox">
    <TextContent usage="location" :text="`${cityText} - ${stateText}`" />
    <div>
      <img :src="require(`../assets/${icon}.png`)" alt="Icon" />
      <TextContent usage="temperature" :text="`${temperatureText}°`" />
    </div>
  </div>
</template>

<script>
import TextContent from '../textContent/TextContent.vue'

export default {
    name: 'Weather',
    components: { TextContent },
    props:{
        icon:{
            type: String,
            default: 'cloudy',
            validator: function(value){
                return ['cloudy', 'cloud', 'thunder', 'storm', 'raining', 'sun'].indexOf(value) !== -1;
            },
        },
        temperatureText:{
            type: String,
            default: '22',
        },
        cityText:{
            type: String,
            required: true,
            default: 'Juiz de Fora'
        },
        stateText:{
            type: String,
            default: 'MG',
            validator: function(value){
                return ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'].indexOf(value) !== -1;
            },
        },
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


#weatherBox{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    color: #222222;
}

div{
    display: flex;
    position: relative;
    bottom: 10px;
}
img{
    width: 40px;
    height: 40px;
    margin: 3px 0;
    position: relative;
    top: 4px;
}
</style>
