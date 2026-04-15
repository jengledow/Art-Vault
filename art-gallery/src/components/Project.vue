<script setup lang="ts">
	import FileUpload from 'primevue/fileupload';
	import { getProject, getProgressPhotos } from '../io/projects.ts';
	import type { Project } from '../types/Project.ts';
	import { useRoute } from 'vue-router';
	import { ref } from 'vue';

	const project = ref<Project>({
		name: '',
		timeAdded: 0,
		timeUpdated: 0,
		projectID: 1,
		userID: 1
	});
	const images = ref<string[]>([]);
	const loading = ref(false);
	const route = useRoute();

	const loadProject = async () => {
		try {
			let id: string = route.params.id as string;
			project.value = await getProject(id);
			images.value = await getProgressPhotos(id);
		} catch (e) {
			console.log(e);
		}
	}

	const addReferencePhoto = async () => {

	}

	loadProject();
</script>

<template>
	<div :if="!loading">
		<div class="header">
			<h1>{{ project.name }}</h1>
			<img v-if="project.referencePhoto" :src="project.referencePhoto" />

			<FileUpload v-else mode="basic" name="img" url="http://localhost:3030/file/upload" accept="image/*" :maxFileSize="100000" @upload="" :auto="true" chooseLabel="Add Reference" />
		</div>

		<div class="progressPhotos">
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
</style>