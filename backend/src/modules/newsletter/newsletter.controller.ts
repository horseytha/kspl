import { Request, Response, NextFunction } from 'express';
import * as newsletterService from './newsletter.service';
import { z } from 'zod';

const subscribeSchema = z.object({
    email: z.string().email(),
});

export const subscribe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = subscribeSchema.parse(req.body);
        await newsletterService.subscribe(email);
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        next(error);
    }
};

export const getAllSubscribers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const subscribers = await newsletterService.getAllSubscribers();
        res.json(subscribers);
    } catch (error) {
        next(error);
    }
};
