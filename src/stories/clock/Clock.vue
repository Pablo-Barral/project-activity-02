<template>
  <div id="timeBox">
    <div>
      {{ hour }}:{{ minute }}
    </div>
    <TextContent usage=date :text="`${weekDay}, ${monthDay} de ${month} de ${year}`"/>
  </div>
</template>

<script>
import TextContent from '../textContent/TextContent.vue'
export default {
name:'Clock',
components:{ TextContent },
props:{
   hour: {
      type: String,
      default: '00',
      validator: function (value) {
        return ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].indexOf(value) !== -1;
      },
   },
   minute: {
      type: String,
      default: '00',
      validator: function (value) {
        return ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'].indexOf(value) !== -1;
      },
   },
   weekDay: {
      type: String,
      default: 'domingo',
      validator: function (value) {
        return ['domingio', 'segunda-feira', 'terça-feria', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'].indexOf(value) !== -1;
      },
   },
    monthDay: {
      type: String,
      default: '01',
      validator: function (value) {
        return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'].indexOf(value) !== -1;
      },
   },
    month: {
      type: String,
      default: 'janeiro',
      validator: function (value) {
        return ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].indexOf(value) !== -1;
      },
   },
   year: {
       type: String,
       default: '2022'
   }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
#timeBox{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #222222;
    font-size: 144px;
}
</style>
