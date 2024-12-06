import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'spaOne',
      component: () => import('../views/SpaOneView.vue'),
    },
    {
      path: '/refacciones',
      name: 'refacciones',
      component: () => import('../views/RefaccionesView.vue'),
    },
    {
      path: '/ingredientes',
      name: 'spaTwo',
      component: () => import('../views/SpaTwoView.vue'),
    },
    {
      path: '/preguntas',
      name: 'spaThree',
      component: () => import('../views/SpaThreeView.vue'),
    },
    {
      path: '/caracteristicas',
      name: 'features',
      component: () => import('../views/InfoDetailedView.vue'),
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    // redireccion al home cuando no se encuentra la ruta
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.name === 'refacciones') {
      console.log('query');

    }
    else{
      return { top: 0 }
    }
  },
})

export default router
