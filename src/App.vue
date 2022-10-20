<template>
  <div class="root-view">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"

onMounted(() => {
  console.log("onMounted")
})
</script>
