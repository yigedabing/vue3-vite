<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const navList = reactive([
  { path: '/store-manager', name: '状态管理' },
  { path: '/use-list', name: '列表渲染' },
  { path: '/dynamic-component', name: '动态组件加载' },
]);
const router = useRouter();
const handleClick = (nav: typeof navList[0]) => {
  router.push(nav.path);
};
</script>

<template>
  <nav>
    <el-link v-for="nav in navList" type="primary" @click="handleClick(nav)">
      {{ nav.name }}
    </el-link>
  </nav>
</template>

<style lang="scss">
nav {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  height: 60px;
  .el-link + .el-link {
    margin-left: 10px;
  }
}
</style>
