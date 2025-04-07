import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import HomeView from '@/views/HomeView.vue'
import MessagesView from '@/views/MessagesView.vue'
import CreatePollView from '@/views/CreatePollView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'


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
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
  ],
})

export default router
