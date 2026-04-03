<script setup lang="ts">
	import Card from 'primevue/card';
	import { getProject, getProgressPhotos } from '../io/projects.ts';
	import Panel from 'primevue/panel';
	import type { Project } from '../types/Project.ts';
	import { useRoute } from 'vue-router';
	import { ref, watch } from 'vue';

	const project = ref<Project>({});
	const images = ref<string[]>([]);
	const loading = ref(false);
	const route = useRoute();

	const loadProject = async (id): any => {
		loading.value = true;
		try {
			project.value = await getProject(id);
			images.value = await getProgressPhotos(id);
		} catch (e) {
			console.log(e);
		} finally {
			loading.value = false;
		}
	};

	watch(() => route.params.id, loadProject, { immediate: true });
</script>

<template>
	<div :if="!loading">
		<div class="header">
			<h1>{{ project.name }}</h1>
			<img v-if="project.referencePhoto" :src="project.referencePhoto" />
			<img v-else src="../assets/add.svg" />
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