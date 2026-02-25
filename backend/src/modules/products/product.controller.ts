import { Request, Response, NextFunction } from 'express';
import * as productService from './product.service';
import { productSchema } from './product.validation';
import { AuthRequest } from '../../middlewares/auth.middleware';

export const createProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        console.log('Creating product with body:', req.body);
        const data = productSchema.parse(JSON.parse(req.body.data || '{}'));
        console.log('Parsed product data:', data);

        let imageUrl = undefined;
        if (req.file) {
            imageUrl = `/uploads/products/${req.file.filename}`;
            console.log('Product image uploaded:', imageUrl);
        }

        const product = await productService.createProduct({
            ...data,
            imageUrl
        });

        res.status(201).json(product);
    } catch (error) {
        console.error('Create Product Error:', error);
        next(error);
    }
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const getProductsByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { slug } = req.params;
        const products = await productService.getProductByCategory(slug);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

export const getFeaturedProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productService.getFeaturedProducts();
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
