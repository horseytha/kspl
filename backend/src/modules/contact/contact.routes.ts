import { Router } from 'express';
import * as contactController from './contact.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.post('/', contactController.sendMessage);
router.get('/', authMiddleware, roleMiddleware(['ADMIN']), contactController.getAllMessages);

export default router;
