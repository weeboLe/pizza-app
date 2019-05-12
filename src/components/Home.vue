<template>
  <div>
    <h1>home</h1>
    <button class="btn btn-success" @click="goToMenu">

    </button>
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
        // this.$router.push({path: '/menu'})
      }
    }
  }

</script>
<style>

</style>
