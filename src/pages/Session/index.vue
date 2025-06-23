<template>
  <el-form label-width="auto" :model="formData" style="max-width: 600px">
    <el-form-item label="账号">
      <el-input v-model="formData.account" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" show-password v-model="formData.password" />
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="formData.verifyCode" />
      <img :src="codeUrl" @click="resetCode" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="goLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormItemProps, FormProps } from 'element-plus';

const formData = reactive({
  account: '',
  password: '',
  verifyCode: ''
});

const codeUrl = ref('/api/user/verifyCode');

const goLogin = () => {
  fetch('/api/user/createUser', {
    method: 'post',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('res>>', response);
    });
};

const resetCode = () => {
  codeUrl.value = codeUrl.value + '?' + Math.random();
};
</script>
