<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <div class="home">
    <h2>home主页</h2>
    <el-link type="primary">欢迎{{ route.query.username }}登录</el-link>
    <router-view></router-view>
  </div>
</template>
