<template>
  <div>
      {{ seconds }}
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: "Timer",
    computed:{
        ...mapState(['seconds', 'logged']),
    },
    methods:{

        ...mapMutations(['logout', 'minusSecond']),

        countdown(){
            if (this.seconds > 0){
                let counter = setInterval(() => {
                    this.minusSecond()
                    if(!this.logged){
                        clearInterval(counter)
                    }
                    if (this.seconds == 0){
                        clearInterval(counter)
                        this.logout()
                    }
                }, 1000);
            }
        }
    },

    created(){
        this.countdown()
    },
    

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>