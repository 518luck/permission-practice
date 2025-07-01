<script setup lang="ts"></script>

<template>
  <div class="main-const-box">
    <div class="main-const">一级菜单权限</div>
    <div class="btn-group">
      <el-button type="primary" v-permission="{ action: 'add' }"
        >Primary</el-button
      >
      <el-button type="success" v-permission="{ action: 'add' }"
        >Success</el-button
      >
      <el-button type="warning" v-permission="{ action: 'add' }"
        >Warning</el-button
      >
      <el-button type="danger" v-permission="{ action: 'add' }"
        >Danger</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-const-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .el-button {
    margin-top: 20px;
    width: 100px;
  }
  .btn-group {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }
}
</style>
