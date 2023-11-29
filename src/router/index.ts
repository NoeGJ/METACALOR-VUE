// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'register',
        name: 'sign-up',
    
        component: () => import('@/views/Register.vue'),
      },
      {
        path: 'register3',
        name: 'sign-up3',
        
        component: () => import('@/views/registroEx.vue'),
    },
      {
        path: 'login',
        name: 'log-in',

        component: () => import('@/views/Login.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
