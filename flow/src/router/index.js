import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import HomeView from '@/views/HomeView.vue'
import MessagesView from '@/views/MessagesView.vue'
import CreatePollView from '@/views/CreatePollView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SavedView from '@/views/SavedView.vue'


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
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
    },
    {
      path: '/create-poll',
      name: 'create-poll',
      component: CreatePollView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/saved',
      name: 'saved',
      component: SavedView,
    },
  ],
})

export default router
