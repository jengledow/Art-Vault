import type { Project } from '../types/Project';
const headers: Headers = new Headers({
	'Content-Type': 'application/json'
});

async function addProject(projectName: string){
	console.log(projectName);
	let res = await fetch("http://localhost:3030/project/add", {
		method: "POST",
		headers: headers, 
		body: JSON.stringify({
			projectName: projectName
		}) 
	})

	console.log(res);
}

async function getAllProjects(){
	let res: any = await fetch("http://localhost:3030/project/getAll", {
		method: "POST",
		headers: headers,
	});

	res = await res.json();

	return res.projects;
}

export {
	addProject,
	getAllProjects
}