<script lang="ts" setup>
import MoreSelect from '@/components/MoreSelect.vue';

const handleChange = (e: any) => {
  console.log('选中的目标数据：', e);
};
</script>

<template>
  <div class="select">
    <MoreSelect
      size="small"
      :list="[
        { name: '按发货单导入', value: '1' },
        { name: '按FBA货件导入', value: '2' },
        { name: '按物流信息编码导入', value: '3' },
      ]"
      placeholder="导入物流信息"
      @change="handleChange"
    ></MoreSelect>
  </div>
  <router-view></router-view>
</template>
