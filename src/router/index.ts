import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
