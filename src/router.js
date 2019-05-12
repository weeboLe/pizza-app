import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

// about二级路由
import History from './components/about/History'
import Contact from './components/about/Contact'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'

// Contact三级路由
import Phone from './components/about/contact/Phone'
import personName from './components/about/contact/personName'

Vue.use(Router)
const routes = [{
    path: '/',
    name: 'homeLink',
    components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'history': History,
      'delivery': Delivery
    }
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    redirect: '/about/contact',
    children: [{
        path: '/about/history',
        name: 'historyLink',
        component: History
      },
      {
        path: '/about/contact',
        name: 'contactLink',
        component: Contact,
        redirect: '/phone',
        children: [{
            path: '/phone',
            name: 'phoneNumber',
            component: Phone
          },
          {
            path: '/personName',
            name: 'personName',
            component: personName
          }
        ]
      },
      {
        path: '/about/orderingGuide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      },
      {
        path: '/about/delivery',
        name: 'deliveryLink',
        component: Delivery
      }
    ]
  },
  {
    path: '/login',
    name: 'loginLink',
    component: Login
  },
  {
    path: '/register',
    name: 'registerLink',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  },
]
export default new Router({
  routes,
  mode: 'history', //不使用hash
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }

  }
})
