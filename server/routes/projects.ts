import { Router } from 'express';
import { add, getAll } from '../controllers/projects.js';
import express from 'express';

const router: Router = Router();
router.use(express.json());

router.post('/add', add);
router.post('/getAll', getAll)

export default router;