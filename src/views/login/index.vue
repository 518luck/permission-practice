<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
})
</script>
<template>
  <div class="login-container">
    <el-card class="login-card" header="欢迎多云">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名:" prop="username" class="login-form-item">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item
          label="密&nbsp;&nbsp;&nbsp;&nbsp;码:"
          prop="password"
          class="login-form-item">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码" />
        </el-form-item>
      </el-form>
      <div class="submit-button">
        <el-button type="primary">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #292929;
  :deep(.el-card__header) {
    border: none;
  }
  .login-card {
    width: 480px;
    height: 230px;
    border: none;
    background-color: #141414;

    :deep(.el-input__wrapper) {
      background-color: #141414;
      border: none;
    }

    .login-form-item {
      margin-bottom: 20px;
    }
  }
  .submit-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
