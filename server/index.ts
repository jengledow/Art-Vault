import cors from 'cors';
import express from "express";
import storageRouter from "./routes/storage.js";
import projectRouter from "./routes/projects.js";
import { addUser, initDB } from './controllers/database.js';

const app: express.Application = express();

app.use(cors());
app.use('/file', storageRouter);
app.use('/project', projectRouter);

initDB();
addUser();

app.listen(3030, () => {
	console.log("listening on 3030");
})