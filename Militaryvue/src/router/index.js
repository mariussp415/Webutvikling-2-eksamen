import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SoldierView from '../views/SoldierView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/soldiers',
    name: 'soldiers',
    component: SoldierView
  },

  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
