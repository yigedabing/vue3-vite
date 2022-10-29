<script lang="ts" setup>
import NavList from '@/views/components/NavList.vue';
</script>

<template>
  <div class="home">
    <NavList />
    <div class="page-views">
      <router-view class="default"></router-view>
      <!-- 命名视图 -->
      <RouterView class="named" name="namedView"></RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-views {
  padding: 1rem;
}
</style>
