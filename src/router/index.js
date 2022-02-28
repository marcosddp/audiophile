import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/headphones',
    name: 'HeadPhones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "HeadPhones" */ '../views/HeadPhones.vue')
  },
  {
    path: '/speakers',
    name: 'Speakers',
 
    component: () => import(/* webpackChunkName: "Speakers" */ '../views/Speakers.vue')
  },
   {
    path: '/earphones',
    name: 'Earphones',
 
    component: () => import(/* webpackChunkName: "Earphones" */ '../views/Earphones.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
