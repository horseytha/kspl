import { Router } from 'express';
import * as userController from './user.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.get('/profile', authMiddleware, userController.getProfile);
router.get('/', authMiddleware, roleMiddleware(['ADMIN']), userController.getAllUsers);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), userController.deleteUser);

export default router;
