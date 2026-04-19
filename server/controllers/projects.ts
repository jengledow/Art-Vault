import { response, type Request, type Response } from "express";
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
  res.status(200).json(true);
}

async function deleteProject(req: Request, res: Response): Promise<any> {
  
}

async function getAll(req: Request, res: Response): Promise<any> {
  let getAll: StatementSync = database.prepare(
    `SELECT projectId, referencePhoto, name, timeAdded FROM projects WHERE userID=?`,
  );
  let projects: any[] = getAll.all(req.body.userId);
  res.status(200).json({
    projects: projects,
  });
}

async function getProject(req: Request, res: Response): Promise<any> {
  let getOne: StatementSync = database.prepare(
    `SELECT * FROM projects WHERE projectId=?`,
  );

	let project: any = getOne.all(req.body.projectId);

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

async function linkReferencePhoto(req: Request, res: Response): Promise<any> {
  let success: boolean = false;
  let date: number = Date.now();

  let update: StatementSync = database.prepare(
    `UPDATE projects
    SET referencePhoto = ?,
    timeUpdated = ?
    WHERE projectID = ?;`
  );

  let changes: any = update.run(req.body.photoUrl, date, req.body.projectId);
  if(changes.changes < 1){
    res.status(400).json({
      success: false,
      error: 'reference photo update failed'
    })
  } else {
    res.status(200).json({
      success: true,
    })
  }
}

export {
	add,
  deleteProject,
	getAll,
	getProgressPhotos,
	getProject,
  linkReferencePhoto
};
