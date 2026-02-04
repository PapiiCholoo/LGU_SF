import { Router } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';
import { protect } from '../middlewares/auth';

const router = Router();

router.use(protect); // Protect all user routes

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
