import express from "express";
import router from "./routes/auth.js";
import type { Request, Response } from "express";
import cors from 'cors';
import { getObject } from './controllers/aws.js'

const app: express.Application = express();

app.use(cors());
app.use(router);

app.get('/', async (req: Request, res: Response) => {
	console.log("Getting");
	await getObject(req, res);
})

app.listen(3030, () => {
	console.log("listening on 3030");
})