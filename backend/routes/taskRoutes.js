import express from 'express';
import { createTask, getTasks, updateTask, deleteTask, getUserTasks } from '../controllers/TaskController.js';
import verifyUser from '../middleware/verifyUser.js';
import verifyAdmin from '../middleware/verifyAdmin.js';


const router = express.Router();

router.post('/create', verifyUser, createTask);
router.get('/person-tasks', verifyUser, getUserTasks);
router.get('/admin/tasks', verifyAdmin, getTasks);
router.get('/', getTasks);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;
