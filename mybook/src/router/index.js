import Vue from 'vue'
import Router from 'vue-router'
import buy from '@/components/buy.vue'
import cat from '@/components/cat.vue'
import home from '@/components/home/home.vue'
import my from '@/components/my.vue'
import shop from '@/components/shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/buy',
      component: buy
    },
    {
      path: '/cat',
      component: cat
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/shop',
      component: shop
    }
  ]
})
