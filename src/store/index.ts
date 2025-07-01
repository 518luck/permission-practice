import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { DataType } from '../api/getLogin'

export const useInfoStore = defineStore('Info', () => {
  const menuList = ref<DataType | null>()

  const sessionData = sessionStorage.getItem('menuList')
  if (sessionData) {
    menuList.value = JSON.parse(sessionData)
  }

  function setUserMenuList(info: DataType | null) {
    menuList.value = info
    sessionStorage.setItem('menuList', JSON.stringify(info))
  }

  return { menuList, setUserMenuList }
})
