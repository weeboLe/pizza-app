import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://wd9086734151cepuuy.wilddogio.com/'
// https://wd0992259444dcaaxf.wilddogio.com/
// 定义全局的守卫
// router.beforeEach((to, from, next) => {
//   // 保存用户登录状态
//   // 判断用户当前路由
//   if (to.path === '/login' || to.path === '/register'){
//     next()
//     // console.log(to,from); 
//   }else{
//     alert('请登录！')
//     next('/login')
//   } 
// })
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
