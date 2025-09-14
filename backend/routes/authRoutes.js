
import express from 'express';
import { register, login, adminLogin } from '../controllers/authController.js';

const router = express.Router();
router.post('/user/register', register);
router.post('/user/login', login);
router.post('/admin/login', adminLogin);


export default router;


