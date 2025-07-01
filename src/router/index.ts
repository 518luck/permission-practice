import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/index.vue'

const routes = [
  {
    path: '/',
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

export default router
