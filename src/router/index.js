import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/Catalog')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('@/views/Delivery')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/Payment')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/Contacts')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
