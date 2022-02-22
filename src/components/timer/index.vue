<template>
  <div>
      {{ seconds }}
  </div>
</template>

<script>
export default {
    name: "Timer",
    data(){
        return{
            seconds: 600
        }
    },
    methods:{
        countdown(){
            setInterval(() => {
                this.seconds--
            }, 1000);
        }
    },
    mounted(){
        this.countdown()
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>