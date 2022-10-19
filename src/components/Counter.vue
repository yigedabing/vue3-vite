<script lang="ts" setup>
import { countStore } from '@/store/count';
</script>
<template>
  <el-button type="primary">
    <small>from Counter.vue组件</small>
    <span style="padding-left: 5px">{{ countStore.count }}</span>
  </el-button>
</template>
