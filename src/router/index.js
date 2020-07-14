import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Market from '../components/market/Market'
import Portfolio from '../components/portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ],
  mode: 'history'
})
