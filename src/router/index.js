import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Calc from '../views/Calc.vue'
import Public from '../views/Public.vue'
import Private from '../views/Private.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/public',
    name: 'Public',
    component: Public
  },
  {
    path: '/private',
    name: 'Private',
    component: Private
  },
  {
    path: '/calc',
    name: 'Calc',
    component: Calc
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
