import { Router } from 'express';
import * as categoryController from './category.controller';
import { roleMiddleware } from '../../middlewares/role.middleware';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/', categoryController.getAllCategories);
router.get('/featured', categoryController.getFeaturedCategories);
router.post('/', authMiddleware, roleMiddleware(['ADMIN']), categoryController.createCategory);

export default router;
