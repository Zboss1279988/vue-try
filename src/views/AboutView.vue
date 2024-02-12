<script setup lang="ts">
  import { useAnswerStore } from '@/stores/answer';
import { storeToRefs } from 'pinia';

  const store = useAnswerStore()
  const { answers } = storeToRefs(store)
</script>
<template>
  <div class="about">
    <h1>{{ answers.join(' ') }}</h1>
  </div>
</template>@/stores/answer