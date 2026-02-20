import { Router } from 'express';
import * as quoteController from './quote.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { roleMiddleware } from '../../middlewares/role.middleware';

const router = Router();

router.post('/add', authMiddleware, quoteController.addToQuote); // Changed from / to /add as requested
router.get('/my-quotes', authMiddleware, quoteController.getMyQuotes);

router.get('/', authMiddleware, roleMiddleware(['ADMIN']), quoteController.getAllQuotes);
router.patch('/:id/status', authMiddleware, roleMiddleware(['ADMIN']), quoteController.updateQuoteStatus);

export default router;
