import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import prisma from '../config/db';

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        role: 'ADMIN' | 'USER';
    };
    file?: any;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : authHeader;

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: number; role: string };

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, role: true }
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user as any;
        next();
    } catch (error) {
        console.error('Auth Error:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
