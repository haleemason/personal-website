import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dogs',
      name: 'dogs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DogsView.vue')
    },
    {
      path: '/dogs/:dogName',
      name: 'dogProfile',
      component: () => import('../views/DogsProfileView.vue')
    }
  ]
})

export default router
