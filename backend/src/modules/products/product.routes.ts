import { Router } from 'express';
import * as productController from './product.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

router.post('/', authMiddleware, roleMiddleware(['ADMIN']), productController.createProduct);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN']), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), productController.deleteProduct);

export default router;
