<template>
  <div>
      {{ seconds }}
  </div>
</template>

<script>
export default {
    name: 'Timer',
    props:{
        seconds:{
            type: Number,
            default: 600
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
div{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
}
</style>