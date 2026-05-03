<script setup lang="ts">
	import FileUpload, { type FileUploadUploadEvent } from 'primevue/fileupload';
	import { getProject, getProgressPhotos, linkReferencePhoto } from '@/io/projects.ts';
	import type { Project } from '@/types/Project.ts';
	import { ref } from 'vue';
	import { short } from '@/utils/dates.ts';
import type { ServerResponse } from '@/types/ServerResponse';

	const props = defineProps<{
		id: number
	}>();
	const project = ref<Project>({
		name: '',
		timeAdded: 0,
		timeUpdated: 0,
		projectID: 1,
		userID: 1,
	});
	const images = ref<string[]>([]);
	const loading = ref(false);

	const loadProject = async () => {
		try {
			project.value = await getProject(props.id);
			images.value = [];
		} catch (e) {
			console.log(e);
		}
	}

	const addReferencePhoto = async (event: FileUploadUploadEvent) => {
		let url: string = JSON.parse(event.xhr.response).publicUrl;
		let res: ServerResponse = await linkReferencePhoto(url, props.id);
		console.log(res);
		if(res.success){
			await loadProject();
		}
	}

	loadProject();
</script>

<template>
	<div :if="!loading">
		<div class="header">
			<h1>{{ project.name }}</h1>
			<h2>Created: {{ short(project.timeAdded) }}</h2>
			<h2>Updated: {{ short(project.timeUpdated) }}</h2>
			<img v-if="project.referencePhoto" :src="project.referencePhoto" />

			<FileUpload v-else mode="basic" name="img" url="http://localhost:3030/file/uploadReferencePhoto" accept="image/*" :maxFileSize="100000" @upload="addReferencePhoto" :auto="true" chooseLabel="Add Reference" />
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

		img {
			height: 250px;
		}
	}
</style>