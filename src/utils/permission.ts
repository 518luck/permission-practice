// 权限的自定义指令
import type { Directive } from 'vue'
import router from '../router'

const vPermission: Directive<HTMLElement, { action: string }> = {
  mounted(el, binding) {
    // console.log('el', el.parentNode)
    console.log('binding', binding.value.action)
    const action = binding.value.action
    console.log('router', router.currentRoute.value.meta)

    const meta = router.currentRoute.value.meta
    if (Object.values(meta).includes(action)) {
      // 有权限
    } else {
      // 无权限
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  },
}

export default vPermission
