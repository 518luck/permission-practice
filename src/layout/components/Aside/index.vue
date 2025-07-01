<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useInfoStore } from '../../../store/index'

const store = useInfoStore()
const { menuList } = storeToRefs(store)
</script>

<template>
  <el-scrollbar height="100vh">
    <el-menu
      :router="true"
      background-color="#141414"
      text-color="#d8dee9"
      active-text-color="#fff">
      <el-sub-menu
        v-for="item in menuList?.rights"
        :key="item.id"
        :index="item.id.toString()">
        <template #title>
          <el-icon><Plus /></el-icon>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item
          v-for="item1 in item?.children"
          :key="item1.id"
          :index="item1.path"
          >{{ item1.authName }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
