<template>
  <el-select v-bind="attrs">
    <el-option v-for="item in list" :value="item">{{ item.name }}</el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';

type IOption = {
  name: string;
  value: string;
};

const attrs = useAttrs();
defineProps({
  list: {
    type: Array<IOption>,
    default: [],
  },
  value: String,
});
</script>
