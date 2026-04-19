<script setup lang="ts">
	import Button from "primevue/button";
	import Card from "primevue/card";
	import type { ProjectPreview } from "../types/ProjectPreview.ts";
	import { short } from '../utils/dates.ts';

	const props = defineProps<{
		project: ProjectPreview
	}>();

	const deleteProject = async () => {
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
			<Button @click="deleteProject()">Delete</Button>
		</template>
	</Card>
</template>

<style lang="scss" scoped>
	img {
		height: 100px;
	}
</style>