import { Router } from 'express';
import * as newsletterController from './newsletter.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.post('/subscribe', newsletterController.subscribe);
router.get('/', authMiddleware, roleMiddleware(['ADMIN']), newsletterController.getAllSubscribers);

export default router;
