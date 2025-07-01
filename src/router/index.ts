import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/index.vue'
import { useInfoStore } from '../store/index'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/layout',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: 'children',
        component: () => import('../views/children/index.vue'),
      },
      {
        path: 'mainconst',
        component: () => import('../views/MainConst/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const store = useInfoStore()

  if (!store.Token && to.path !== '/login') {
    return '/login'
  }
})

export default router
