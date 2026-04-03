<script setup lang="ts">
	import { getProject } from '../io/projects.ts';
	import Panel from "primevue/panel";
	import type { Project } from "../types/Project.ts";
	import { useRoute } from 'vue-router';
	import { ref, watch } from 'vue';

	const project = ref<Project>({});
	const loading = ref(false);
	const route = useRoute();

	const loadProject = async (id) => {
		loading.value = true;
		try {
			project.value = await getProject(id);
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
		<Panel class="panel">
			<h2>{{ project.name }}</h2>
			<img :src="project.referencePhoto" alt="Reference Photo not defined" />
			<p>{{ project.timeAdded }}</p>
		</Panel>
	</div>
</template>

<style lang="scss" scoped>
.panel {
	width: 300px;
}
</style>
