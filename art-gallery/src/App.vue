<script setup lang="ts">
  import { login } from './io.ts/auth';
  import { onUpload } from './io.ts/upload';
  import FileUpload from 'primevue/fileupload';
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <FileUpload mode='basic' name="img" :auto="true" url="http://localhost:3030/file/upload" accept="image/*" :maxFIleSize="1000000" @upload="onUpload" />
</template>

<style scoped></style>