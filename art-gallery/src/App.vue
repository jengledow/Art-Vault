<script setup lang="ts">
  import AddProjectDialog from './components/AddProjectDialog.vue';
  import DynamicDialog from 'primevue/dynamicdialog';
  import { ref } from 'vue';
  import { getAllProjects } from './io/projects';
  import { useDialog } from 'primevue';
  import ProjectPreview from './components/ProjectPreview.vue';
  import type { Project } from './types/Project';

  const projects = ref([]);
  const dialog = useDialog();

  const addProject = () => {
    console.log("clicked");
    dialog.open(AddProjectDialog, {});
  }

  const loadProjects = async () => {
    try {
      projects.value = await getAllProjects();
    } catch (e) {
      console.log(e);
    }
  }

  loadProjects();
</script>

<template>
  <div>
    <template v-for="project in projects">
    </template>
  </div>
  
  <DynamicDialog />
</template>

<style lang="scss">
  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>