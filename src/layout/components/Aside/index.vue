<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'

import { useInfoStore } from '../../../store/index'

const store = useInfoStore()
const { menuList } = storeToRefs(store)

console.log(menuList.value)
</script>

<template>
  <el-scrollbar height="100vh">
    <el-menu
      background-color="#141414"
      text-color="#d8dee9"
      active-text-color="#fff">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Plus /></el-icon>
          <span>一级菜单</span>
        </template>
        <el-menu-item index="1-1">1.1</el-menu-item>
        <el-menu-item index="1-2">1.2</el-menu-item>
        <el-menu-item index="1-3">1.3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Setting />
          </el-icon>
          <span>二级菜单</span>
        </template>
        <el-menu-item index="1-1">2.1</el-menu-item>
        <el-menu-item index="1-2">2.2</el-menu-item>
        <el-menu-item index="1-3">2.3</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
