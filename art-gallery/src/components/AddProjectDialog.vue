<script setup lang="ts">
	import Button from 'primevue/button';
	import InputText from 'primevue/inputtext';
	import { addProject } from '@/io/projects';

	let projectName = "";
</script>

<template>
	<h2>New Project</h2>
	<InputText type="text" v-model="projectName" />
	<Button label="+ Create" @click="addProject(projectName)"/>
</template>

<style lang="scss" scoped></style>