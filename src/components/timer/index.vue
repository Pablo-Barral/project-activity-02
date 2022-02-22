<template>
  <div>
      {{ seconds }}
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    name: "Timer",
    data(){
        return{
            seconds: 600
        }
    },
    methods:{

        ...mapMutations(['timeout']),

        countdown(){
            setInterval(() => {
                if(this.seconds > 0){
                this.seconds--
                }else{
                    this.timeout()
                }
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