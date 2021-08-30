import { Router } from 'express';
import { loginUser } from './auth.http';

const router = Router();

router.route('/login').post(loginUser);

export default router;
