<script setup lang="ts">
	import Button from 'primevue/button';
	import InputText from 'primevue/inputtext';
	import { addProject } from '@/io/projects';
	import { useRouter } from 'vue-router';
import type { ServerResponse } from '@/types/ServerResponse';

	const router = useRouter();
	let projectName = "";

	const navigate = (id: string) => {
		router.push(`/project/${id}`);
	};

	const emit = defineEmits(['created']);

	const addProjectAndRedirect = async () => {
		let response: ServerResponse = await addProject(projectName);
		navigate(response.result.insertedId);
	}
</script>

<template>
	<h2>New Project</h2>
	<InputText type="text" v-model="projectName" />
	<Button label="+ Create" @click="addProjectAndRedirect()"/>
</template>

<style lang="scss" scoped></style>