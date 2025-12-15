import { createRouter, createWebHistory } from 'vue-router'
import { Users } from '../users'
import { OrderComponent } from '../orders'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '',
    component: Users
  },{
    path: '/order',
    component: OrderComponent
  }],
})

export default router
