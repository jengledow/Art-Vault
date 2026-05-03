<script setup lang="ts">
	import AddProjectDialog from "./AddProjectDialog.vue";
	import Card from "primevue/card";
	import { getAllProjects } from "../io/projects";
	import type { Project } from "@/types/Project";
	import ProjectPreview from "./ProjectPreview.vue";
	import { ref } from "vue";
	import { useRouter } from "vue-router";

	const projects = ref<Project[]>([]);
	const router = useRouter();

	const navigate = (projectId: number) => {
		router.push(`/project/${projectId}`);
	};

	const loadProjects = async () => {
		try {
			projects.value = await getAllProjects();
		} catch (e) {
			console.log(e);
		}
	};

	loadProjects();
</script>

<template>
	<div class="projects">
		<template v-for="project in projects">
			<ProjectPreview
				:project="project"
				@click="navigate(project.projectID)"
				class="project"
				v-on:delete="loadProjects()"
			/>
		</template>
		<Card class="project add">
			<template #content>
				<AddProjectDialog />
			</template>
		</Card>
	</div>
</template>

<style lang="scss" scoped>
	.projects {
		display: flex;
		gap: 5px;

		.add {
			width: 300px;
			display: flex;
			justify-content: center;
		}

		.project {
			width: 300px;
		}
	}
</style>