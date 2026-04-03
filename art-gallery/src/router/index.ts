import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Project from "../components/Project.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: Home },
		{ path: "/project/:id", component: Project },
	],
});

export default router;
