import type { Project } from "../types/Project";
import { post } from "./io";

async function addProject(projectName: string) {
  await post('project/add', {
    projectName: projectName
  });
}

async function getProject<Project>(projectId: number): Promise<Project> {
  let res: any = await post('project/getProject', {
    projectId: projectId
  });
  console.log(res);

	return res as Project;
}

async function linkReferencePhoto(photoUrl: string, projectId: number): Promise<boolean> {
  let res: any = post('project/linkReferencePhoto', {
    projectId: projectId,
    photoUrl: photoUrl
  })

  if(res.success){
    return true;
  }

  return false;
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
  
}

export {
	addProject,
  deleteProject,
	getProgressPhotos,
	getAllProjects,
	getProject,
  linkReferencePhoto
};