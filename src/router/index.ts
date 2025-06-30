import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/index.vue'

const routes = [
  {
    path: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: 'children',
        component: () => import('../views/children/index.vue'),
      },
    ],
  },
  {
    path: '/Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
