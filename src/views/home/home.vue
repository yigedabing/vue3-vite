<script lang="ts" setup>
import UserList from '@/components/UserList.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="home">
    <section>
      <h2>home主页</h2>
      <el-link type="primary">欢迎{{ route.query.username }}登录</el-link>
      <UserList />
    </section>

    <router-view></router-view>
  </div>
</template>
