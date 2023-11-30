// Composables
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

import { getAuth, onAuthStateChanged } from 'firebase/auth';



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
                meta:
                {
                    auth: true,
                }
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
                meta:
                {
                    auth: true,
                }
            },
            {
                path: 'ejercicios',
                name: 'ejercicios',
                component: () => import('@/views/ejercicios.vue'),
                meta:
                {
                    auth: true,
                }
            },
            {
              path: 'alimentos',
              name: 'alimentos',
              component: () => import('@/views/alimentos.vue'),
              meta:
              {
                  auth: true,
              }
          },

            {
                path: 'progresos',
                name: 'progresos',
                component: () => import('@/views/progresos.vue'),
                meta:
                {
                    auth: true,
                }
            },
            {
                path: 'planesali',
                name: 'planesali',
                component: () => import('@/views/planesali.vue'),
                meta:
                {
                    auth: true,
                }
            },
            {
                path: '/planes/:id',
                name: 'edit',
                component: () => import('@/views/Add.vue'),
                meta:
                {
                    auth: true,
                }
            },

              {
                path: '/planes/add',
                name: 'add',
                component: () => import('@/views/Add.vue'),
                meta:
                {
                    auth: true,
                }
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

// Crea un objeto de Vue para contener tus funciones o estado global
const app = createApp({
    data() {
      return {
        usuarioAutenticado: false,
      };
    },
    methods: {
      verificarEstadoAutenticacion() {
        const auth = getAuth();
  
        onAuthStateChanged(auth, (usuario) => {
          this.usuarioAutenticado = !!usuario;
  
          if (!this.usuarioAutenticado) {
            console.log("NO HAY USUARIO2");
          } else {
            console.log("INGRESO UN WEY2");
          }
        });
      },
    },
  });
  

  // Verifica el estado de autenticación antes de cada cambio de ruta
router.beforeEach((to, from, next) => {
    const auth = getAuth();
  
    // Si la ruta requiere autenticación
    if (to.meta.auth) {
      onAuthStateChanged(auth, (usuario) => {
        if (!usuario) {
          // Si no hay usuario autenticado, redirige a la página de inicio de sesión
          next('/login');
        } else {
          // Si hay usuario autenticado, permite la navegación
          next();
        }
      });
    } else {
      // Si la ruta no requiere autenticación, permite la navegación
      next();
    }
  });
  // Monta la aplicación en el elemento con id 'app'
// Monta la aplicación en el elemento con id 'app'
app.use(router);
app.mount('#app');