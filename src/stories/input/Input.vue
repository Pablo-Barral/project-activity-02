<template>
  <span :class="classes">
      <input :type="type" 
      :placeholder="sample" 
      :class="classes"
      :value="text"
      >

      <img v-if="icon" 
      :src="require(`../assets/${icon}.png`)" 
      alt="Icon">
  </span>
</template>

<script>
export default {
    name: 'Input',
    props:{
        text:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            validator: function(value){
                return ['text', 'password', 'submit'].indexOf(value) !== -1
            }
        },
        sample:{
            type: String,
            validator: function (value) {
                return ['Usuário', 'Senha'].indexOf(value) !== -1;
            },
        },
        class:{
            type: String,
            default: 'textSpan',
            validator: function (value){
                return ['textSpan', 'loginError'].indexOf(value) !== -1
            }
        },
        icon:{
            type: String,
            validator: function(value){
                return ['user', 'lock', false].indexOf(value) !== -1
            }
        }
    },

    computed:{

        classes(){
            return{
                [`${this.class}`]: true,
                'submit': this.type == 'submit'
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
span{
    font-family: 'Poppins', sans-serif;
    border-radius: 50px;
    height: 67px;
    width: 100%;
    padding: 10px;
}
input{
    background: transparent;
    border: 0;
    border-radius: 50px;
    padding-left: 10px;
    width: 90%;
    color: #E0E0E0;
    height: 100%;
    font-size: 16px;
}
input:focus{
    outline: 0;
}

input::placeholder{
    color: #E0E0E0;
    opacity: 1;
}
img{
    height: 20px;
    position: relative;
    top: 3px;
    right: 3%;
}
.submit{
    padding: 0;
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
}
.loginError{
    border: solid 1px #E9B425;
}
</style>
