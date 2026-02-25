import { Router } from 'express';
import * as productController from './product.controller';
import { upload } from '../../config/multer';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.get('/featured', productController.getFeaturedProducts);
router.get('/category/:slug', productController.getProductsByCategory);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

router.post('/', authMiddleware, roleMiddleware(['ADMIN']), upload.single('image'), productController.createProduct);
router.put('/:id', authMiddleware, roleMiddleware(['ADMIN']), upload.single('image'), productController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware(['ADMIN']), productController.deleteProduct);

export default router;
