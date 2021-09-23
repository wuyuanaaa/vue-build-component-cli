import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/test'
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/slot')
  }
]

const router = new VueRouter({
  routes
})

export default router
