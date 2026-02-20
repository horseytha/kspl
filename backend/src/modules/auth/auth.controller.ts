import { Request, Response, NextFunction } from 'express';
import * as authService from './auth.service';
import { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from './auth.validation';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = registerSchema.parse(req.body);
        const result = await authService.register(data);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = loginSchema.parse(req.body);
        const result = await authService.login(data);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = forgotPasswordSchema.parse(req.body);
        const result = await authService.forgotPassword(email);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token, newPassword } = resetPasswordSchema.parse(req.body);
        const result = await authService.resetPassword(token, newPassword);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
