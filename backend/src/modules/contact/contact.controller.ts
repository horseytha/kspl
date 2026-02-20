import { Request, Response, NextFunction } from 'express';
import * as contactService from './contact.service';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(10),
});

export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = contactSchema.parse(req.body);
        await contactService.createContactMessage(data);
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        next(error);
    }
};

export const getAllMessages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const messages = await contactService.getAllMessages();
        res.json(messages);
    } catch (error) {
        next(error);
    }
};
