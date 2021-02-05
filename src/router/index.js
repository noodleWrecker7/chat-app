import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat/:room',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/chat/',
    name: 'Chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
