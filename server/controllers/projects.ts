import { type Request, type Response } from "express";
import { DatabaseSync, StatementSync } from "node:sqlite";
import { getEnvVariable } from "./utils.js";

let database: DatabaseSync = new DatabaseSync(
  `database/${getEnvVariable("DATABASE_NAME")}`,
);

async function add(req: Request, res: Response): Promise<any> {
  let insert: StatementSync = database.prepare(
    `INSERT INTO projects (userID, timeAdded, timeUpdated, name) VALUES (?, ?, ?, ?)`,
  );
  insert.run(1, Date.now(), Date.now(), req.body.projectName);
  res.status(200).json({
    success: true,
  });
}

async function getAll(req: Request, res: Response): Promise<any> {
  let getAll: StatementSync = database.prepare(
    `SELECT projectId, referencePhoto, name, timeAdded FROM projects WHERE userID=?`,
  );
  let projects: any[] = getAll.all(1);
  console.log(projects);
  res.status(200).json({
    projects: projects,
  });
}

async function getProject(req: Request, res: Response): Promise<any> {
  let getOne: StatementSync = database.prepare(
    `SELECT * FROM projects WHERE userID=?`,
  );

	let project: any = getOne.all(1);

	res.status(200).json(project[0]);
}

async function getProgressPhotos(req: Request, res: Response): Promise<any> {
  let getOne: StatementSync = database.prepare(
    `SELECT * FROM images WHERE projectId=?`,
  );

	let photos: any = getOne.all(1);

	res.status(200).json({
		photos: ["this is a photo", "this is also a photo"]
	});
}

export {
	add,
	getAll,
	getProgressPhotos,
	getProject
};
