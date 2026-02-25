import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';
import { AuthRequest } from '../../middlewares/auth.middleware';

export const getProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const userId = req.user?.id;
        if (!userId) throw { statusCode: 401, message: 'Unauthorized' };

        const user = await userService.getUserById(userId);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = parseInt(req.params.id);
        await userService.deleteUser(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};
