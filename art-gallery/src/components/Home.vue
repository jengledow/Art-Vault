<script setup lang="ts">
	import AddProjectDialog from "./AddProjectDialog.vue";
	import Button from "primevue/button";
	import Card from "primevue/card";
	import DynamicDialog from "primevue/dynamicdialog";
	import { getAllProjects } from "../io/projects";
	//import Panel from "primevue/panel";
	import ProjectPreview from "./ProjectPreview.vue";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	import { useDialog } from "primevue";

	const projects = ref<Project[]>([]);
	const dialog = useDialog();
	const router = useRouter();

	const addProject = () => {
		console.log("clicked");
		dialog.open(AddProjectDialog, {});
	};

	const navigate = (projectId) => {
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
			/>
		</template>
		<Card class="project add" @click="addProject()">
			<template #content>
				<svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
			</template>
		</Card>
	</div>

	<DynamicDialog />
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