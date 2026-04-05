import type { Project } from "../types/Project";
const headers: Headers = new Headers({
  "Content-Type": "application/json",
});

async function addProject(projectName: string) {
  let res = await fetch("http://localhost:3030/project/add", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      projectName: projectName,
    }),
  });
}

async function getProject<Project>(projectId: string): Promise<Project> {
  let res = await fetch("http://localhost:3030/project/getProject", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      projectId: projectId,
    }),
  });

	res = await res.json();
	return res as Project;
}

async function getProgressPhotos(projectId: string) {
  let res: any = await fetch("http://localhost:3030/project/getProgressPhotos", {
    method: "POST",
    headers: headers,
		body: JSON.stringify({
			projectId: projectId
    })
  });

  res = await res.json();

  return res.photos;
}

async function getAllProjects() {
  let projects: Project[] = [];
  let res: any = await fetch("http://localhost:3030/project/getAll", {
    method: "POST",
    headers: headers,
  });

  res = await res.json();
  projects = res.projects;

  return projects;
}

export {
	addProject,
	getProgressPhotos,
	getAllProjects,
	getProject
};