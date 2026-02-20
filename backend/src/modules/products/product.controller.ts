import { Request, Response, NextFunction } from 'express';
import * as productService from './product.service';
import { productSchema } from './product.validation';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = productSchema.parse(req.body);
        const product = await productService.createProduct(data);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { category, material, minPrice, maxPrice } = req.query;

        // Check if any filter is applied
        if (category || material || minPrice || maxPrice) {
            const products = await productService.getFilteredProducts({ category, material, minPrice, maxPrice });
            return res.json(products);
        }

        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productService.getProductById(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        const data = productSchema.partial().parse(req.body);
        const product = await productService.updateProduct(id, data);
        res.json(product);
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id);
        await productService.deleteProduct(id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        next(error);
    }
};
