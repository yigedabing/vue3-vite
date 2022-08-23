<template>
  <ul>
    <li v-for="item in data.userList">{{ item.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

interface IData {
  userList: Array<{ name: string }>;
}

const data = reactive<IData>({
  userList: [],
});

const fetData = () => {
  return new Promise<Array<{ name: string }>>((resolve) => {
    setTimeout(() => {
      resolve([
        { name: '动态加载' },
        { name: 'input输入' },
        { name: '娃哈哈发生的' },
      ]);
    }, 500);
  });
};

onMounted(async () => {
  data.userList = await fetData();
});
</script>
