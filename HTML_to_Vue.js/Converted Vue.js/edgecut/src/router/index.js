import AboutView from '@/views/pages/AboutView.vue'
import BlogView from '@/views/pages/BlogView.vue'
import FurnituresView from '@/views/pages/FurnituresView.vue'
import HomeView from '@/views/pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path:'/furnitures',
      name:'furnitures',
      component: FurnituresView
    },
    {
      path:'/blog',
      name:'blog',
      component: BlogView
    }
  ]
})

export default router
