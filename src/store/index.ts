import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../mock/login'

export const useInfoStore = defineStore('Info', () => {
  const menuList = ref<User[]>([])

  function setUserMenuList(info: User[]) {
    menuList.value = info
  }

  return { menuList, setUserMenuList }
})
