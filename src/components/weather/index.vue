<template>
  <div id="weatherBox">
    <TextContent location="true" :text="`${cityShow} - ${stateShow}`" />
    <div>
      <img draggable="false" :src="require(`@/assets/${iconShow}.png`)" alt="Icon" />
      <TextContent temperature="true" :text="`${temperatureShow}°`" />
    </div>
  </div>
</template>

<script>
import TextContent from "@/components/textContent";
import axios from "axios";

export default {
  name: "Weather",
  components: {
    TextContent,
  },

  data() {
    return {
      temperatureShow: "22",
      cityShow: "Juiz de Fora",
      stateShow: "MG",
      iconShow: "cloudy",
    };
  },

  methods: {
    weather() {
      if (!localStorage.getItem("lat") || !localStorage.getItem("long")) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            localStorage.setItem("lat", lat);
            localStorage.setItem("long", long);
            this.weatherShow()
          });
        }
      }else{
        this.weatherShow()
      }
      
    },

    weatherShow(){
      let lat = localStorage.getItem("lat");
      let long = localStorage.getItem("long");

      const api = `https://api.weatherapi.com/v1/current.json?key=288ce9269f9c46699a1185755220202&q=${lat},${long}`;
      axios.get(api).then((response) => {
        console.log(response)
        const region = response.data.location.region;

        this.stateShow = this.regionShort(region);

        let icon = response.data.current.condition.icon;
        const id = response.data.current.condition.text;
        this.iconShow = this.weatherIcon(icon, id);

        let temperature = response.data.current.temp_c;
        temperature = temperature.toFixed(0);
        this.temperatureShow = temperature;

        const lat = localStorage.getItem("lat");
        const long = localStorage.getItem("long");
        this.location(lat, long);
      });
    },

    location(lat, lng) {
      if (!localStorage.getItem("city")) {
        axios
          .get(
            "https://us1.locationiq.com/v1/reverse.php?key=pk.9866ca8f778fce5a705ef63d65b98bc8&lat=" +
              lat +
              "&lon=" +
              lng +
              "&format=json"
          )
          .then((reply) => {
            localStorage.setItem("city", reply.data.address.city);
            this.cityShow = reply.data.address.city;
          });
      } else {
        this.cityShow = localStorage.getItem("city");
      }
    },

    weatherIcon(icon, id) {
      if (id.includes("thunder") && id.includes("rain")) {
        icon = "storm";
      } else if (id.includes("thunder")) {
        icon = "thunder";
      } else if (id.includes("rain") || id.includes("drizzle")) {
        icon = "raining";
      } else if (id.includes("Fog") || id.includes("Mist")) {
        icon = "cloud";
      } else if (
        id.includes("Cloudy") ||
        id.includes("Overcast") ||
        id.includes("cloudy")
      ) {
        icon = "cloudy";
      } else if (id.includes("Sunny") || id.includes('Clear')) {
        icon = "sun";
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
