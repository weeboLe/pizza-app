<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button class="btn btn-sm btn-outline-success" @click="addToBasket(item, option)">+</button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm btn-light" @click="decreaseQuantity(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm btn-light" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.name}} {{item.size}}寸</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{total+"RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{basketsText}}
      </div>
    </div>
    <!-- 购物车 -->

  </div>
</template>
<script>
  export default {
    data() {
      return {
        baskets: [],
        basketsText: '请添加商品',
        // getMenuItems: {}
      }
    },
    computed: {
      getMenuItems(){
        // return this.$store.state.meunItems
        return this.$store.getters.getMenuItems
      },
      total() {
        let totalCost = 0
        for (let index in this.baskets) {
          let indevidualItem = this.baskets[index]
          totalCost += indevidualItem.quantity * indevidualItem.price
        }
        return totalCost
      }
    },
    methods: {
      addToBasket(item, option) {
        let basket = {
          name: item.name,
          size: option.size,
          price: option.price,
          quantity: 1
        }
        if (this.baskets.length > 0) {
          // 过滤
          let result = this.baskets.filter(basket => {
            return basket.name === item.name && basket.price === option.price
          })

          if (result != null && result.length > 0) {
            result[0].quantity++
          } else {
            this.baskets.push(basket)
          }

        } else {
          this.baskets.push(basket)
        }


      },
      decreaseQuantity(item) {
        item.quantity--
        if (item.quantity <= 0) {
          this.removeFromBasket(item)
        }

      },
      increaseQuantity(item) {
        item.quantity++
      },
      removeFromBasket(item) {
        this.baskets.splice(this.baskets.indexOf(item), 1)
      },
      fetchData() {
        // fetch('https://wd9086734151cepuuy.wilddogio.com/menu.json')
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data);

        //     this.getMenuItems = data
        //     console.log( this.getMenuItems);

        //   })
        // this.http.get('menu.json')
        //   .then(res =>{
        //      this.getMenuItems = res.data
        //   })
        this.http.get('menu.json')
          .then(res => this.$store.commit('setMenuItems', res.data))
      }
    },
    created() {
      this.fetchData()
    }
  }

</script>
<style>

</style>
