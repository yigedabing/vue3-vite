<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const navList = reactive([
  { componentName: 'StoreManager', text: '状态管理' },
  { componentName: 'UserList', text: '用户列表' },
  { componentName: 'DynamicComponent', text: '动态组件加载' },
  { componentName: 'NamedView', text: '命名视图' },
]);
const route = useRoute();
</script>

<template>
  <nav>
    <div class="item" v-for="nav in navList">
      <RouterLink :to="{ name: nav.componentName, query: { ...route.query } }">
        {{ nav.text }}
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  height: 60px;
  display: flex;
  .item {
    & + .item {
      margin-left: 10px;
    }
  }
  a {
    padding: 10px;
    background-color: #ddd;
  }
  .router-link-active {
    color: #fff;
    background-color: #409eff;
  }
}
</style>
