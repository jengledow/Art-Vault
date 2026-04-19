import { Router } from 'express';
import { uploadReferencePhoto } from '../controllers/storage.js';
import photo from '../middleware/photo.js';

const router: Router = Router();

router.post('/uploadReferencePhoto', photo, uploadReferencePhoto);

export default router;