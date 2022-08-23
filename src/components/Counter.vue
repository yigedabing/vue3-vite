<script lang="ts" setup>
import { countStore } from '@/store/count';
</script>
<template>
  <el-button type="primary">
    <small>from Counter.vue</small>
    {{ countStore.count }}
  </el-button>
</template>
