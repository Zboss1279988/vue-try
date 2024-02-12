<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="flex flex-row justify-between w-full items-center align-middle h-20 z-40 border-b border-black/10">
    <div class="w-full pl-8">
      <RouterLink to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" /></RouterLink>
    </div>

      <nav class="w-full flex flex-row justify-end gap-6 pr-8 items-center h-full align-middle">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>


  <div class="container mt-6">
    <RouterView />
  </div>  
</template>