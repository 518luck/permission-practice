# 权限练习

## 后台管理权限

1. 导航栏或者菜单栏控制
2. 界面控制,
3. 按钮控制
4. 请求和响应

## 导航栏

- 这个主要结合后端数据,提供的权限字段来判别,用字段来展示菜单,这个项目是用循环,得
  后端配合一下.

## 界面控制

- 主要防止没有登录的用户就通过 URL 地址绕过登录,或者通过 URL 进入不属于自己的地
  址
  - 首先登录的时候获取 token 在转跳到时候路由守卫(router.beforeEach)检查有没有
    token
  - 然后通过动态路由来防止用户通过自己账号跳转到不属于自己界面的权限

## 按钮的控制

- 用自定义指令,通过自定义指令 binding 来接受传入的值
- 在过滤的时候通过路由中的 meta 接受后端的权限值,与自定义指令的值来对比

```
const two = {
  path: 'mainconst',
  component: () => import('../views/MainConst/index.vue'),
  meta: '',
}

 item.children?.forEach((item1) => {
      if (item1.path !== undefined) {
        const routePush = three[item1.path]
        routePush.meta = item1.rights
        if (routePush) {
          router.addRoute('layout', routePush)
        }
      }
    })
```

## 请求和响应

    // 在发送请求之前做些什么
    const token = sessionStorage.getItem('Token')
    //加一个if(req.url.includes('login'))
    /*     if (config.url?.includes('login')) {
      return config
     } */ //就可以让其他请求带上token了
