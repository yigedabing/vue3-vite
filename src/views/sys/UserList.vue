<template>
  <div class="user-list">
    <el-alert type="success">{{ props.userInfo }}</el-alert>

    <ElTable :data="tableData">
      <ElTableColumn label="编号" width="100" type="index"> </ElTableColumn>
      <ElTableColumn label="用户ID" prop="id"></ElTableColumn>
      <ElTableColumn label="姓名" prop="name"></ElTableColumn>
      <ElTableColumn label="年龄" prop="age"></ElTableColumn>
      <ElTableColumn>
        <template #header> 操作 </template>
        <template v-slot="{ row, $index }">
          <el-link type="danger" @click="removeItem($index)" :underline="false">
            删除
          </el-link>
          <el-link
            style="margin-left: 10px"
            type="primary"
            @click="goDetail(row)"
            :underline="false"
          >
            详情
          </el-link>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

interface IDataItem {
  id: string;
  name: string;
  age: number;
}

type TUserInfo = { name: string; age: number; id: string };

const props = defineProps<{ userInfo: TUserInfo }>();

const tableData = ref<IDataItem[]>([]);
const router = useRouter();

onMounted(() => {
  for (let i = 0; i < 10; i++) {
    tableData.value.push({
      id: Math.random().toString(16).substring(2),
      name: `王小明${i}`,
      age: Math.floor(Math.random() * (i + 10)),
    });
  }
});

const goDetail = (item: IDataItem) => {
  // router.push({ path: `user-detail/${item.id}` });
  router.push({
    name: 'UserDetail',
    params: { id: item.id },
    query: { ...item },
  });
};

const removeItem = (index: number) => {
  tableData.value.splice(index, 1);
};
</script>
