<script setup lang="ts">
import Header from './components/Header/index.vue'
import Aside from './components/Aside/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="box-min">
      <el-aside width="200px" class="aside">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main class="maiun">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.box-min {
  width: 100%;
  min-height: 100vh;
  color: #d8dee9;

  .aside {
    background-color: #141414;
    border-right: 1px solid #202020;
  }

  .header {
    background-color: #141414;
    border-bottom: 1px solid #202020;
    height: auto;
  }
  .el-header {
  }
  .maiun {
    background-color: #1a1a1a;
  }
}
</style>
