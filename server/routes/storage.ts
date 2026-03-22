import { Router } from 'express';
import { uploadPhoto } from '../controllers/storage.js';
import photo from '../middleware/photo.js';

const router: Router = Router();

router.post('/upload', photo, uploadPhoto);

export default router;