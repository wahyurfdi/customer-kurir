import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import PaymentResult from '../views/PaymentResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/callback',
    name: 'callback',
    component: PaymentResult
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router