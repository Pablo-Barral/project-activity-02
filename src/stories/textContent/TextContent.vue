<template>
  <p :class="classes"> {{ text }} </p>
</template>

<script>

export default {
    name: 'TextContent',
    props:{
      text:{
        type: String,
        required: true,
        default: 'Sample',
      },
          usage: {
      type: String,
      default: 'greeting',
      validator: function (value) {
        return ['greeting', 'temperature', 'date', 'location', 'homeParagraph', 'footerText', 'timerText', 'continueText', 'loginError'].indexOf(value) !== -1;
      }
        }
    },
    

    computed:{

      classes() {
      return {
        [`${this.usage}`]: true,
      };
    },
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    font-family: 'Poppins', sans-serif;
}
.greeting{
    font-size: 16px;
    margin: 0;
}
.temperature{
   font-weight: 700;
   font-size: 48px;
   margin: 0;
}
.date{
    font-size: 14px;
}
.location{
    font-size: 14px;
}
.homeParagraph{
    font-size: 24px;
    margin: 0;
}
.footerText{
    font-size: 11px;
}
.timerText{
    font-size: 14px;
}
.continueText{
    color: #C13216;
    font-size: 12px;
}
.loginError{
    color: #E9B425;
    font-weight: 700;
}

</style>