import { createRouter, createWebHistory } from 'vue-router'
import { Users } from '../users'
import { OrderComponent } from '../orders'
import Login from '../pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '',
    component: Users
  },{
    path: '/order',
    component: OrderComponent
  }, {
    path: '/login',
    component: Login
  }],
})

export default router
