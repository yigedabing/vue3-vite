<template>
  <div class="login">
    <el-form
      ref="loginForm"
      label-width="100px"
      :model="ruleForm"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="disabledLogin" type="primary" @click="submitForm">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormRules } from 'element-plus';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

const ruleForm = reactive({
  username: '',
  password: '',
});
const rules = reactive<FormRules>({
  username: [{ required: true, message: '用户名', trigger: 'blur' }],
  password: [{ required: true, message: '密码', trigger: 'blur' }],
});

const disabledLogin = computed(() => {
  return !ruleForm.username.trim() || !ruleForm.password.trim();
});

const router = useRouter();
const submitForm = () => {
  if (!disabledLogin.value) {
    router.push({ path: '/home', query: { ...ruleForm } });
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
}
.el-form {
  position: relative;
  width: 400px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
</style>
