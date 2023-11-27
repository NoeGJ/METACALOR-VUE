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
        path: 'login',
        name: 'log-in',

        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'progress',
        name: 'progress',

        component: () => import('@/views/Progress.vue'),
      },
      {
        path: 'ranking',
        name: 'ranking',

        component: () => import('@/views/Ranking.vue'),
      },
      {
        path: 'planes',
        name: 'planes',

        component: () => import('@/views/Planes_alimenticios.vue'),
      },
      {
        path: 'ejercicios',
        name: 'ejercicios',

        component: () => import('@/views/Ejercicios.vue'),
      },
      {
        path: 'alimentos',
        name: 'alimentos',

        component: () => import('@/views/Alimentos.vue'),
      },

      {
        path: '/planes/:id',
        name: 'edit',
        component: () => import('@/views/Edit.vue'),
      },
      {
        path: '/planes/add',
        name: 'add',
        component: () => import('@/views/Add.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
