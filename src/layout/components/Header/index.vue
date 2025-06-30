<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl } = toRefs(state)
</script>

<template>
  <header class="header">
    <div class="header-left">
      <img src="../../../assets/logo.svg" alt="logo" class="logo" />
      <span>多云</span>
    </div>

    <div class="header-right">
      <span class="nameText">多云</span>
      <el-avatar :size="35" :src="circleUrl" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between; /* 两端对齐，左边靠左，右边靠右 */
  align-items: center;
  .header-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .logo {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nameText {
      margin-right: 10px;
    }
  }
}
</style>
