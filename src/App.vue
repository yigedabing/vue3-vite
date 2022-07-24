<script lang="ts" setup>
import { computed, ref } from 'vue';

const inputValue = ref('');

const outputValue = computed(() => {
  return inputValue.value.toUpperCase();
});
</script>

<template>
  <router-view></router-view>
</template>
