import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
import vPermission from './utils/permission'
import './style.css'

const pinia = createPinia()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)
app.directive('permission', vPermission)
app.mount('#app')
