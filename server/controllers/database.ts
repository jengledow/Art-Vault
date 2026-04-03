import { DatabaseSync, StatementSync } from "node:sqlite";
import { getEnvVariable } from "./utils.js";

let dbName: string = `database/${getEnvVariable('DATABASE_NAME')}`;
let database: DatabaseSync = new DatabaseSync(dbName);

function initDB(): void {
	database.exec(`CREATE TABLE IF NOT EXISTS users (
		userID INTEGER PRIMARY KEY,
		timeAdded INTEGER,
		timeUpdated INTEGER
	);
	CREATE TABLE IF NOT EXISTS projects (
		projectID INTEGER PRIMARY KEY,
		userID INTEGER,
		timeAdded INTEGER,
		timeUpdated INTEGER,
		name TEXT,
		referencePhoto TEXT,
		notes TEXT,
		FOREIGN KEY (userID) REFERENCES users (userID)
	);
	CREATE TABLE IF NOT EXISTS images (
		imageID INTEGER PRIMARY KEY,
		projectID INTEGER,
		url TEXT,
		FOREIGN KEY (projectID) REFERENCES projects (projectID)
	);`);
}

function insert(tableName: string, records: Record<string, any>[]): void {
}

function addUser(): void {
	let insert: StatementSync = database.prepare(`INSERT INTO users (timeAdded, timeUpdated) VALUES (?, ?)`);
	insert.run(Date.now(), Date.now());
}

export {
	addUser,
	initDB,
}