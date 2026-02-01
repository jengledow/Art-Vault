import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("This is a new manufacturer for me");
	console.log("response sent");
})

app.listen(3030, () => {
	console.log("listening on 3030");
})