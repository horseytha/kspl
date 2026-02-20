import { Request, Response, NextFunction } from 'express';
import * as quoteService from './quote.service';
import { AuthRequest } from '../../middlewares/auth.middleware';

export const addToQuote = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.userId;
        if (!userId) throw { statusCode: 401, message: 'Unauthorized' };

        const { productId, quantity, size } = req.body;

        // Basic validation
        if (!productId || !quantity) {
            throw { statusCode: 400, message: 'ProductId and quantity are required' };
        }

        const quote = await quoteService.addToQuote(userId, productId, quantity, size);
        res.status(200).json(quote);
    } catch (error) {
        next(error);
    }
};

export const getMyQuotes = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.userId;
        if (!userId) throw { statusCode: 401, message: 'Unauthorized' };

        const quotes = await quoteService.getQuotesByUser(userId);
        res.json(quotes);
    } catch (error) {
        next(error);
    }
};

export const getAllQuotes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quotes = await quoteService.getAllQuotes();
        res.json(quotes);
    } catch (error) {
        next(error);
    }
};

export const updateQuoteStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const { status } = req.body;

        // Validate status string if needed, or allow any string as per schema change to String
        if (!status) {
            throw { statusCode: 400, message: 'Status is required' };
        }

        const quote = await quoteService.updateQuoteStatus(id, status);
        res.json(quote);
    } catch (error) {
        next(error);
    }
};
