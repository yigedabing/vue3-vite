<script lang="ts" setup>
import NavList from '@/views/components/NavList.vue';
</script>

<template>
  <div class="home">
    <NavList />
    <div class="page-views">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-views {
  padding: 1rem;
  height: calc(100vh - 66px);
}
</style>
