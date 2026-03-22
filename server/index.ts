import cors from 'cors';
import express from "express";
import storageRouter from "./routes/storage.js";

const app: express.Application = express();
app.use(express.json());

app.use(cors());
app.use("/file", storageRouter);


app.listen(3030, () => {
	console.log("listening on 3030");
})