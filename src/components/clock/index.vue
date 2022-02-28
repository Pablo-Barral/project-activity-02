<template>
  <div id="timeBox">
    <div aria-label="Hora">
      {{ hourShow }}:{{ minuteShow }}
    </div>
    <TextContent date=true :text="`${weekDayShow}, ${monthDayShow} de ${monthShow} de ${yearShow}`"
    aria-label="Data" />
  </div>
</template>

<script>

import TextContent from '@/components/textContent'
import {weekDays} from '@/constants/weekDays.js'
import {months} from '@/constants/months.js'

export default {
name:'Clock',
components:{
  TextContent,
},

data(){
  return{
    hourShow: '11',
    minuteShow: '26',
    weekDayShow: 'quarta-feira',
    monthDayShow: '02',
    monthShow: 'março',
    yearShow: '2022'
  }
},

methods:{
  clockTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthDay = date.getDate();
    let weekDay = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();

    this.weekDayShow = weekDays[weekDay]
    this.monthDayShow = monthDay
    this.monthShow = months[month]
    this.yearShow = year

    hour < 10 ? this.hourShow = '0' + hour : this.hourShow = hour
    minute < 10 ? this.minuteShow = '0' + minute : this.minuteShow = minute
  }
},

mounted(){
  setInterval(this.clockTime, 1000)
}

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>