import { Router } from 'express';
import {
	add,
	getAll,
	getProgressPhotos,
	getProject
} from '../controllers/projects.js';
import express from 'express';

const router: Router = Router();
router.use(express.json());

router.post('/add', add);
router.post('/getAll', getAll);
router.post('/getProject', getProject);
router.post('/getProgressPhotos', getProgressPhotos);

export default router;