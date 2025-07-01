<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { getUserInfo } from '../../api'
import { useInfoStore } from '../../store/index'
import { initDynamicRoutes } from '../../router'

const store = useInfoStore()

// 获取路由实例和当前路由信息
const router = useRouter()

const form = reactive({
  username: '普通用户1',
  password: '1',
})

const handleSubmitClick = async () => {
  const { data } = await getUserInfo(form)
  const { code, message, data: info } = data
  if (code === 200) {
    ElMessage({
      message: message,
      type: 'success',
    })
    store.setUserMenuList(info)
    initDynamicRoutes()
    router.push('/layout')
  } else {
    ElMessage.error(message)
  }
}
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
        <el-button type="primary" @click="handleSubmitClick">提交</el-button>
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
