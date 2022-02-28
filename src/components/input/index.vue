<template>
  <span :class="{textSpan: !submitData, loginError: loginError && !submitData}">
      <input :type="type" 
      :placeholder="sample" 
      :class="{submit: submitData, passwordSpace: passSpace}"
      v-model="fieldData"
      @blur="sendData"
      @input="spacePassword"
      :aria-describedby="`${sample}`">

      <img v-if="icon"
      draggable="fasle" 
      :src="require(`@/assets/${icon}.png`)" 
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
            submitData: this.submit,
            fieldData: 'Continuar',
            passSpace: false
        }
    },
    computed:{
        ...mapState(['loginError', 'user', 'password'])
    },

    watch:{
        user(newUser){
            if (this.type != 'password' && this.type != 'submit'){
                this.fieldData = newUser
            }
        },
        password(newPassword){
            if (this.type == 'password'){
                this.fieldData = newPassword
            }
        }
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
        },
        spacePassword(){
            if (this.type == 'password'){
                if(this.fieldData){
                    this.passSpace = true
                }else{
                    this.passSpace = false
                }
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