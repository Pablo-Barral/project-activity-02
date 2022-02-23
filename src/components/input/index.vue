<template>
  <span :class="{textSpan: !submitData, loginError: loginError && !submitData}">
      <input :type="type" 
      :placeholder="sample" 
      :class="{submit: submitData}"
      v-model="fieldData"
      @blur="sendData">

      <img v-if="icon" 
      :src="require(`@/assets/${iconData}.png`)" 
      alt="Icon">
  </span>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "Input",

    props:{
        type:{
            required: true,
            default: "text",
            type: String,
        },
        sample:{
            type: String,
        },
        icon:{
            type: String,
            default: "",
        },
        submit:{
            default: false,
        },
    },

    data(){
        return{
            iconData: this.icon,
            submitData: this.submit,
            fieldData: 'Continuar',
        }
    },
    computed:{
        ...mapState(['loginError', 'user', 'password'])
    },

    methods:{
        ...mapMutations(['setUser', 'setPassword']),

        sendData(){
            if(this.type == 'password'){
                this.setPassword(this.fieldData)
            }else if(this.type != 'submit'){
                this.setUser(this.fieldData)
            }
        },
        updateData(){
            if(this.type == 'password'){
                this.fieldData = this.password
            }else if (this.type != 'submit'){
                this.fieldData = this.user
            }
        }
        
    },
    mounted(){
        this.updateData()
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>