import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '../views/HomeView.vue'
// import AppealsView from '@/views/AppealsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView'),
    meta: {
      layout: 'DefaultLayout',
      guard: 'private',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView'),
    meta: {
      layout: 'LoginLayout',
      guard: 'private',
    },
  },
  {
    path: '/appeals',
    name: 'appeals',
    component: () => import('@/views/AppealsView'),
    meta: {
      layout: 'DefaultLayout',
      guard: 'private',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      layout: 'DefaultLayout',
      guard: 'private',
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  
  if (1 == 3 && to.path != '/login'){
    return '/login'
  }
})

export default router
