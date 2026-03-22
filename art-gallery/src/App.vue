<script setup lang="ts">
  import AddProjectDialog from './components/AddProjectDialog.vue';
  import DynamicDialog from 'primevue/dynamicdialog';
  import Panel from 'primevue/panel'
  import { ref } from 'vue';
  import { useDialog } from 'primevue';

  const projects = ref([]);
  const dialog = useDialog();

  const addProject = () => {
    console.log("clicked");
    dialog.open(AddProjectDialog, {});
  }
</script>

<template>
  <div>
    <Panel v-for="project in projects">
      <p>{{ project }}</p>
    </Panel>
    <Panel>
      <h1 @click="addProject()">+</h1>
    </Panel>
  </div>
  
  <DynamicDialog />
</template>

<style lang="scss">
  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>