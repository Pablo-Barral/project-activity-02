<template>
  <div id="timeBox">
    <div>
      {{ hourShow }}:{{ minuteShow }}
    </div>
    <TextContent :text="`${weekDayShow}, ${monthDayShow} de ${monthShow} de ${yearShow}`"/>
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
    hourShow: '',
    minuteShow: '',
    weekDayShow: '',
    monthDayShow: '',
    monthShow: '',
    yearShow: ''
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