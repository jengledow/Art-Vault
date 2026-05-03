<script setup lang="ts">
	import Button from "primevue/button";
	import Card from "primevue/card";
	import type { ProjectPreview } from "../types/ProjectPreview.ts";
	import { short } from '../utils/dates.ts';
	import { deleteProject } from '@/io/projects.ts';

	const props = defineProps<{
		project: ProjectPreview
	}>();
	
	const emit = defineEmits(['delete']);

	const delProject = async (event: Event) => {
		event.preventDefault();
		event.stopPropagation();
		deleteProject(props.project.projectID);
		emit('delete');
	}
</script>

<template>
	<Card class="project">
		<template #title>{{ project.name }}</template>
		<template #content>
			<img :src="project.referencePhoto" alt="Reference Photo not defined" />
		</template>
		<template #footer>
			<p>{{ short(project.timeAdded) }}</p>
			<Button @click="delProject($event)">Delete</Button>
		</template>
	</Card>
</template>

<style lang="scss" scoped>
	img {
		height: 100px;
	}
</style>