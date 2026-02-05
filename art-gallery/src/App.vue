<script setup lang="ts">
  import { login } from './io.ts/auth';
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <button @click="login('yeet', 'yeet')">Login</button>
</template>

<style scoped></style>
