<script setup lang="ts">
	import Card from "primevue/card";
	import type { ProjectPreview } from "../types/ProjectPreview.ts";

	const props = defineProps<{
		project: ProjectPreview
	}>();
</script>

<template>
	<Card class="project">
		<template #title>{{ project.name }}</template>
		<template #content>
			<img :src="project.referencePhoto" alt="Reference Photo not defined" />
		</template>
		<template #footer>
			<p>{{ project.timeAdded }}</p>
		</template>
	</Card>
</template>

<style lang="scss" scoped>
</style>