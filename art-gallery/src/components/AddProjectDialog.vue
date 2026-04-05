<script setup lang="ts">
	import Button from 'primevue/button';
	import InputText from 'primevue/inputtext';
	import { addProject } from '@/io/projects';
	import { useRouter } from 'vue-router';

	const router = useRouter();
	let projectName = "";

	const navigate = () => {
		router.push(`/`);
	};

	const addProjectAndRedirect = () => {
		console.log("yayeet");
		addProject(projectName);
		navigate();
	}
</script>

<template>
	<h2>New Project</h2>
	<InputText type="text" v-model="projectName" />
	<Button label="+ Create" @click="addProjectAndRedirect()"/>
</template>

<style lang="scss" scoped></style>