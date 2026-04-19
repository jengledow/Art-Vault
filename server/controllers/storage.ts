import { Bucket, Storage } from "@google-cloud/storage";
import { getEnvVariable } from "./utils.js";
import { type Request, type Response } from "express";
import { v4 } from "uuid";

const bucketName: string = getEnvVariable('BUCKET_NAME');
const projectId: string = getEnvVariable('PROJECT_ID');
const keyFilename: string = getEnvVariable('KEY_FILE_NAME');

const storage: Storage = new Storage({
	projectId: projectId,
	keyFilename: keyFilename
})

async function uploadReferencePhoto(req: Request, res: Response): Promise<any> {
	if(!req.file){
		res.status(401).json({
			success: false,
			error: "no file specified"
		})

		return;
	}

	let extension: string | undefined = req.file.originalname.split('.')[1];

	if(extension == undefined){
		res.status(401).json({
			success: false,
			error: "file doesn't have a proper extnesion"
		})

		return;
	}

	let filename: string = `${v4()}.${extension}`;

	try {
		const bucket: Bucket = storage.bucket(bucketName);
		const blob = bucket.file(filename);
		const blobStream = blob.createWriteStream();

		blobStream.end(req.file.buffer);

		res.status(201).json({
			success: true,
			publicUrl: `https://storage.googleapis.com/${bucketName}/${blob.name}`
		})
	} catch (e) {
		res.status(401).json({
			msg: "hell no white boy",
			error: e
		})
	}
}

async function uploadProgressPhoto(req: Request, res: Response): Promise<any> {
	let filename: string = '';
	if(req.file){
		filename = req.file.originalname;
	} else {
		res.status(401).json({
			msg: "hell no white boy",
			error: "no file specified"
		})

		return;
	}

	try {
		const bucket: Bucket = storage.bucket(bucketName);
		const blob = bucket.file(filename);
		const blobStream = blob.createWriteStream();

		blobStream.end(req.file.buffer);

		res.status(201).json({
			msg: "hell yeah kiddo",
			response: {
				publicUrl: `https://storage.googleapis.com/${bucketName}/${blob.name}`
			}

		})
	} catch (e) {
		res.status(401).json({
			msg: "hell no white boy",
			error: e
		})
	}

}

export {
	uploadReferencePhoto
}