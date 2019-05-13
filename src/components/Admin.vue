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
        <tbody v-for="item in getMuntItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-sm btn-outline-danaer">&times;</button>
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
        // getMuntItems: []
      }
    },
    components: {
      'app-new-pizza': NewPizza
    },
    created() {
      fetch('https://wd9086734151cepuuy.wilddogio.com/menu.json')
        .then(res => res.json())
        .then(data => {
          let menuArray = []
          for (let key in data) {
            data[key].id = key
            menuArray.push(data[key])
          }
          // this.getMuntItems = menuArray
          this.$store.commit('setMenuItems', menuArray)
        })
    },
    methods: {
      deleteData(item) {
        fetch(`https://wd9086734151cepuuy.wilddogio.com/menu/${item.id}/.json`, {
            method: 'DELETE',
            headers: {
              "Content-type": 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => this.$store.commit('removeMenuItems', item))
        // .then(data => this.$router.push({
        //   name: "adminLink"
        // }))
      }
    },
    computed: {
      // getMuntItems(){
      //   return this.$store.state.meunItems
      // }
      getMuntItems: {
        get() {
          // return this.$store.state.meunItems
          return this.$store.getters.getMenuItems
        },
        set() {

        }
      }
    }
  }

</script>
<style>

</style>
