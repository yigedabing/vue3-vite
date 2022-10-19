<template>
  <div>store manager</div>
  <div class="grid">
    <section>
      <el-button @click="countStore.increment()">
        Count ++ {{ countStore.count }}
      </el-button>
      <Counter></Counter>
    </section>
    <section>2</section>
    <section>3</section>
  </div>
</template>

<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { countStore } from '@/store/count';

countStore;
</script>
