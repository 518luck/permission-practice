import type { MockMethod } from 'vite-plugin-mock'

interface User {
  id: number
  username: string
  password: string
  token: string
  rights: any[]
}

const users: User[] = [
  {
    id: 1,
    username: '普通用户',
    password: 'normal',
    token: 'abcdefghijklmnopqrstuvwxyz',
    rights: [
      {
        id: 1,
        authName: '一级菜单',
        icon: 'icon-menu',
        children: [
          {
            id: 11,
            authName: '一级项目1',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete'],
          },
          {
            id: 11,
            authName: '一级项目2',
            path: '/',
            rights: ['view'],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    username: '管理员',
    password: 'admin',
    token: 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join(''),
    rights: [
      {
        id: 1,
        authName: '一级菜单',
        icon: 'icon-menu',
        children: [
          {
            id: 11,
            authName: '一级项目1',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete'],
          },
          {
            id: 11,
            authName: '一级项目2',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete'],
          },
        ],
      },
      {
        id: 2,
        authName: '二级菜单',
        icon: 'icon-menu',
        children: [
          {
            id: 22,
            authName: '二级项目1',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete'],
          },
        ],
      },
    ],
  },
]

export default [
  {
    url: '/api/login',
    method: 'post',
    response: (opt: { body: { username: string; password: string } }) => {
      const { username, password } = opt.body

      const user = users.find(
        (item) => item.username === username && item.password === password
      )

      if (user) {
        return {
          code: 200,
          data: {
            id: user.id,
            username: user.username,
            token: user.token,
            rights: user.rights,
          },
          message: '登录成功',
        }
      } else {
        return {
          code: 401,
          data: null,
          message: '用户名或密码错误',
        }
      }
    },
  },
] as MockMethod[]
