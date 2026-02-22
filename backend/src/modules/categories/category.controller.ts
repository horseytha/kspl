import { Request, Response, NextFunction } from 'express';
import * as categoryService from './category.service';

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

export const getFeaturedCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await categoryService.getFeaturedCategories();
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};
