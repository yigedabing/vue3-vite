<script lang="ts" setup>
import NavList from '@/views/components/NavList.vue';
</script>

<template>
  <div class="home">
    <img src="@/assets/images/2.jpeg" width="100" />
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
