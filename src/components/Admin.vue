<template>
  <h1>admin</h1>
</template>
<script>
  export default {
    data() {
      return {
        name: 'zhansan'
      }
    },
    // beforeRouteEnter: (to, from, next) => {
      
    //   next(vm=>{
    //     alert('hellow' + vm.name)
        
    //   });
    // }
    beforeRouteLeave:(to, from, next) => {
      
    }
  }

</script>
<style>

</style>
