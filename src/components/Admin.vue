<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>榴莲Pizza</td>
            <td>
              <button class="btn btn-sm btn-outline-danaer">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from "./NewPizza";
  export default {
    data() {
      return {
        name: 'zhansan'
      }
    },
    components:{
      'app-new-pizza':NewPizza
    }
    // 进入私有守卫
    // beforeRouteEnter: (to, from, next) => {

    //   next(vm=>{
    //     alert('hellow' + vm.name)

    //   });
    // }

    // beforeRouteLeave:(to, from, next) => {

    // }
  }

</script>
<style>

</style>
