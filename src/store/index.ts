import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { DataType } from '../api/getLogin'

export const useInfoStore = defineStore('Info', () => {
  const menuList = ref<DataType | null>()
  const Token = ref<string | null>()

  const sessionData = sessionStorage.getItem('menuList')
  if (sessionData) {
    menuList.value = JSON.parse(sessionData)
  }

  const tokenData = sessionStorage.getItem('Token')
  if (tokenData) {
    Token.value = tokenData
  }

  function setUserMenuList(info: DataType | null) {
    menuList.value = info
    Token.value = info?.token
    sessionStorage.setItem('Token', info?.token || '')
    sessionStorage.setItem('menuList', JSON.stringify(info))
  }

  return { menuList, setUserMenuList, Token }
})
