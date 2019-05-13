import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {
  store
} from './components/store/store'

axios.defaults.baseURL = 'https://wd9086734151cepuuy.wilddogio.com/'

Vue.prototype.http = axios
// https://wd0992259444dcaaxf.wilddogio.com/
// 定义全局的守卫
router.beforeEach((to, from, next) => {
  // 保存用户登录状态
  // 判断用户当前路由
  if (to.path === '/login' || to.path === '/register') {
    next()
    // console.log(to,from); 
  } else if (store.getters.isLogin) {
    next()
  } else {
    alert('请登录')
    next('/login')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
