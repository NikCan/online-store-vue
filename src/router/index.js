import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/ListOfGoods.vue')
  },
  {
    path: '/',
    name: 'home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
