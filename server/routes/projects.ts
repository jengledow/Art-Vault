import { Router } from 'express';
import {
	add,
	deleteProject,
	getAll,
	getProgressPhotos,
	getProject,
	linkReferencePhoto
} from '../controllers/projects.js';
import express from 'express';

const router: Router = Router();
router.use(express.json());

//POST
router.post('/add', add);
router.post('/getAll', getAll);
router.post('/getProject', getProject);
router.post('/getProgressPhotos', getProgressPhotos);
router.post('/linkReferencePhoto', linkReferencePhoto);

//DELETE
router.delete('/delete/:id', deleteProject);

export default router;