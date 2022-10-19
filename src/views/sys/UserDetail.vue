<template>
  <div class="user-detail">
    <h4>
      <p>props id: {{ props.id }}</p>
      <p>params id: {{ params.id }}</p>
    </h4>
    <p>query: {{ query }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
// const props = defineProps({
//   id: {
//     type: String,
//     required: true,
//   },
// });
// equal to
const props = defineProps<{ id: string }>();

const route = useRoute();
const params = route.params;
const query = route.query;
</script>
