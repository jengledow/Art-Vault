async function login(username: string, password: string){
    let res: Response = await fetch("http://localhost:3030/login", {
        method: "POST",
        body: JSON.stringify({
            uname: username,
            pswd: password
        })
    })

    console.log(res);
}

export {
    login
}