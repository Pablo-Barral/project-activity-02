<template>
  <div id="weatherBox">
    <TextContent :text="`${stateShow}`"/>
    <div>
      <img :src="require(`@/assets/${iconShow}`)" alt="Icon" />
      <TextContent :text="`${temperatureShow}°`" />
    </div>
  </div>
</template>

<script>
// import weather from '@/api/weather/weather.js'
import TextContent from "@/components/textContent";

export default {
  name: "Weather",
  components: {
    TextContent,
  },

  data() {
    return {
      temperatureShow: "",
      city: "",
      stateShow: "",
      iconShow: ""
    };
  },

  methods: {
    weather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let long = position.coords.longitude;
          let lat = position.coords.latitude;

          const api = `https://api.weatherapi.com/v1/current.json?key=288ce9269f9c46699a1185755220202&q=${lat},${long}`;

          fetch(api)
            .then((response) => response.json())
            .then((data) => {
              // const location = data.location.name;
              const region = data.location.region;

              this.stateShow = this.regionShort(region);

              let icon = data.current.condition.icon;
              const id = data.current.condition.text;
              icon = this.weatherIcon(icon, id);
              this.iconShow = icon

              let temperature = data.current.temp_c;
              temperature = temperature.toFixed(0);
              this.temperatureShow = temperature;

              // location(lat,long).then(city =>{ cityName = city})
            });
        });
      }
    },

  weatherIcon(icon, id) {
    if (id.includes("thunder") && id.includes("rain")) {
      icon = "storm.png";
    } else if (id.includes("thunder")) {
      icon = "thunder.png";
    } else if (id.includes("rain") || id.includes("drizzle")) {
      icon = "raining.png";
    } else if (id.includes("Fog") || id.includes("Mist")) {
      icon = "cloud.png";
    } else if (
      id.includes("Cloudy") ||
      id.includes("Overcast")
    ) {
      icon = "cloudy.png";
    } else if (id.includes("Sunny")) {
      icon = "sun.png";
    }
    return icon;
},


    regionShort(region) {
      let regionShow = "";

      switch (region) {
        case "Acre":
          regionShow = "AC";
          break;
        case "Alagoas":
          regionShow = "AL";
          break;
        case "Amapá":
          regionShow = "AP";
          break;
        case "Amazonas":
          regionShow = "AM";
          break;
        case "Bhaia":
          regionShow = "BA";
          break;
        case "Ceará":
          regionShow = "CE";
          break;
        case "Espírito Santo":
          regionShow = "ES";
          break;
        case "Goiás":
          regionShow = "GO";
          break;
        case "Maranhão":
          regionShow = "MA";
          break;
        case "Mato Grosso":
          regionShow = "MT";
          break;
        case "Mato Grosso do Sul":
          regionShow = "MS";
          break;
        case "Minas Gerais":
          regionShow = "MG";
          break;
        case "Pará":
          regionShow = "PA";
          break;
        case "Paraíba":
          regionShow = "PB";
          break;
        case "Paraná":
          regionShow = "PR";
          break;
        case "Pernambuco":
          regionShow = "PE";
          break;
        case "Piauí":
          regionShow = "PI";
          break;
        case "Rio de Janeiro":
          regionShow = "RJ";
          break;
        case "Rio Grande do Norte":
          regionShow = "RN";
          break;
        case "Rio Grande do Sul":
          regionShow = "RS";
          break;
        case "Rondônia":
          regionShow = "RO";
          break;
        case "Roraima":
          regionShow = "RR";
          break;
        case "Santa Catarina":
          regionShow = "SC";
          break;
        case "São Paulo":
          regionShow = "SP";
          break;
        case "Sergipe":
          regionShow = "SE";
          break;
        case "Tocantins":
          regionShow = "TO";
          break;
      }

      return regionShow;
    },
  },

  mounted() {
    this.weather();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
