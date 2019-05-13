<template>
  <div>
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎品尝</h1>
          <h2>pizza!</h2>
          <button class="btn btn-success mb-3" @click="goToMenu">去点餐</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goToMenu() {
        // this.$router.replace('/menu')
        // this.$router.replace({name: 'menuLink'})
        // this.$router.push('/menu')
        this.$router.push({path: '/menu'})
      }
    }
  }

</script>
<style>
  #home {
    background: url('../../src/assets/pizza.jpg');
    height: 60vh;
    padding: 10%;
  }

  h1,
  h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 70vw; 
    margin: 0 auto;
    padding: 20px 0;
  }

</style>
