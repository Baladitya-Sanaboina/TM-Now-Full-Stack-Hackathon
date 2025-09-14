import express from 'express';
import { getExample } from '../controllers/Home.js';

const router = express.Router();

router.get('/', getExample);

export default router;
