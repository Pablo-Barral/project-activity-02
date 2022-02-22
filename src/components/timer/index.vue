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
            if (this.seconds > 0){
                let counter = setInterval(() => {
                    this.seconds--
                    if (this.seconds == 0){
                        clearInterval(counter)
                        this.timeout()
                    }
                }, 1000);
            }
        }
    },

    created(){
        this.seconds = 600
        this.countdown()
    },
    

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>