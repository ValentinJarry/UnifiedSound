<script setup lang="ts">
import { useAudio } from '@/composables/useAudio'
const { start } = useAudio()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="start">start</button>
  </div>
</template>

<style>
.about {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
