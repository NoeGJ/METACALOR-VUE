// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            { path: '', redirectTo: '/Home', pathMatch: 'full' },
            {
                path: '/',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),

            },
            {
                path: 'homelog',
                name: 'in',
                component: () => import('@/views/homelog.vue'),
            },
            {
                path: 'register',
                name: 'sign-up',
                component: () => import('@/views/Register.vue'),
            },
            {
                path: 'register2',
                name: 'sign-up2',
                
                component: () => import('@/views/registro.vue'),
            },
            {
                path: 'login',
                name: 'sign-up3',
                
                component: () => import('@/views/registrosEx.vue'),
            },
            {
                path: 'login2',
                name: 'log-in',
                component: () => import('@/views/Login.vue'),
            },
            {
                path: 'example',
                name: 'exa',
                component: () => import('@/views/examplelog.vue'),
            },
            {
                path: 'perfil',
                name: 'perfil',
                component: () => import('@/views/perfil.vue'),
            },
            {
                path: 'ejercicios',
                name: 'ejercicios',
                component: () => import('@/views/ejercicios.vue'),
            },

            {
                path: 'progresos',
                name: 'progresos',
                component: () => import('@/views/progresos.vue'),
            },
            {
                path: 'planesali',
                name: 'planesali',
                component: () => import('@/views/planesali.vue'),
            },
            {
                path: '/planes/:id',
                name: 'edit',
                component: () => import('@/views/Add.vue'),
              },
              {
                path: '/planes/add',
                name: 'add',
                component: () => import('@/views/Add.vue'),
              },
            { path: '**', redirectTo: 'home' } // Redirigir a HOME si la ruta no coincide con ninguna
        ],
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});



export default router;