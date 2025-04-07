
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import HomeView from '@/views/HomeView.vue'
import messages from '@/views/messages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages,
    },
  ],
})

export default router
