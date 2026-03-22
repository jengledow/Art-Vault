async function addProject(projectName: string){
	let res = await fetch("http://localhost:3030/project/add", {
		method: "POST",
		body: projectName
	})

	console.log(res);
}