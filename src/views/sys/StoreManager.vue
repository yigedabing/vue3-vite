<template>
  <div>store manager</div>
  <div class="grid">
    <section>
      <el-button @click="countStore.increment()">
        Count ++ {{ countStore.count }}
      </el-button>
      <Counter></Counter>
    </section>
    <section>
      <img src="@/assets/images/18.png" />
    </section>
    <section>
      <img src="@/assets/images/19.svg" width="30" />
      <img src="@/assets/images/14.png" width="30" />
    </section>
  </div>
</template>

<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { countStore } from '@/store/count';

countStore;
</script>
