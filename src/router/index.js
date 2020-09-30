import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import RegistrationPage from '@/pages/RegistrationPage'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/registration',
      name: 'Registration',
      component: RegistrationPage
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
