<template>
  <el-scrollbar height="100vh">
    <el-menu
      background-color="#141414"
      text-color="#d8dee9"
      active-text-color="#fff">
      <el-sub-menu>
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
