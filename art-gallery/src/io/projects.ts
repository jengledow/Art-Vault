import type { Project } from "../types/Project";
import type { ServerResponse } from "@/types/ServerResponse";
import { deleteMethod, post } from "./io";

async function addProject(projectName: string): Promise<ServerResponse> {
  let res: ServerResponse = await post('project/add', {
    projectName: projectName
  });
  
  return res;
}

async function getProject<Project>(projectId: number): Promise<Project> {
  let res: any = await post('project/getProject', {
    projectId: projectId
  });
  console.log(res);

	return res as Project;
}

async function linkReferencePhoto(photoUrl: string, projectId: number): Promise<ServerResponse> {
  let res: ServerResponse = await post('project/linkReferencePhoto', {
    projectId: projectId,
    photoUrl: photoUrl
  });

  return res;
}

async function getProgressPhotos(projectId: string) {
}

async function getAllProjects(): Promise<Project[]> {
  let projects: Project[] = [];

  let res: any = await post('project/getAll', {
    userId: 1
  })

  projects = res.projects;

  return projects;
}

async function deleteProject(projectId: number): Promise<any> {
  let res: any = await deleteMethod(`project/delete/${projectId}`); 
}

export {
	addProject,
  deleteProject,
	getProgressPhotos,
	getAllProjects,
	getProject,
  linkReferencePhoto
};