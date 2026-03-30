import type { Request, Response } from "express";

async function login(req: Request, res: Response){
    console.log("login");
    res.send("logging in");
}

function createNewUser(){

}

export {
    login
}