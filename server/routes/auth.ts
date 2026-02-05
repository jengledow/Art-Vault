import { Router } from 'express';
import { login } from '../controllers/auth.js';

const router: Router = Router();

//router.use('/user');
router.post('/login', login);

export default router;