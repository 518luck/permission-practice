import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/index.vue'
import { useInfoStore } from '../store/index'

const one = {
  path: 'children',
  component: () => import('../views/children/index.vue'),
  meta: '',
}

const two = {
  path: 'mainconst',
  component: () => import('../views/MainConst/index.vue'),
  meta: '',
}

const three: { [key: string]: { path: string; component: any; meta?: any } } = {
  '/layout/children': one,
  '/layout/mainconst': two,
}

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
    name: 'layout',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue'),
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

export function initDynamicRoutes() {
  const store = useInfoStore()
  const newMenuList = store.menuList?.rights

  newMenuList?.forEach((item) => {
    item.children?.forEach((item1) => {
      if (item1.path !== undefined) {
        const routePush = three[item1.path]
        routePush.meta = item1.rights
        if (routePush) {
          router.addRoute('layout', routePush)
        }
      }
    })
  })
}

let dynamicRoutesInited = false

router.beforeEach((to, from, next) => {
  const store = useInfoStore()

  // 如果有菜单数据且还没注册动态路由
  if (!dynamicRoutesInited && store.menuList?.rights) {
    initDynamicRoutes()
    dynamicRoutesInited = true
    // 重新跳转，确保新路由生效
    next({ ...to, replace: true })
    return
  }

  if (!store.Token && to.path !== '/login') {
    return '/login'
  }

  next()
})

export default router
