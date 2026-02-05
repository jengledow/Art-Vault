import type { Request, Response } from "express";
import { 
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
    GetObjectCommand
} from "@aws-sdk/client-s3";

async function getObject(req: Request, res: Response){
    const client = new S3Client({});

    const { Body } = await client.send(
        new GetObjectCommand({
            Bucket: 'art-vault',
            Key: 'completed.PNG'
        })
    )

    console.log(await Body?.transformToString());
}

async function putObject(){}

async function deleteObject(){}

export {
    deleteObject,
    getObject,
    putObject
}