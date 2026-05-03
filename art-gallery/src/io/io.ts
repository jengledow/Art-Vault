import type { ServerResponse } from "@/types/ServerResponse";

const headers: Headers = new Headers({
  "Content-Type": "application/json",
});

const url: string = "http://localhost:3030";

async function post(route: string, body: any): Promise<ServerResponse> {
	if(route[0] == '/'){
		route = route.substring(1);
	}

	let res: any = await fetch(`${url}/${route}`, {
		method: "POST",
		headers: headers,
		body: JSON.stringify(body)
	})
	
	res = await res.json();
	return res;
}

async function deleteMethod(route: string): Promise<any> {
	if(route[0] == '/'){
		route = route.substring(1);
	}

	let res: any = await fetch(`${url}/${route}`, {
		method: "DELETE",
		headers: headers
	})
	
	res = await res.json();
	return res;
}

export {
	post,
	deleteMethod
}