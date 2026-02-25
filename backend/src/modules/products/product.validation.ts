import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(2),
    description: z.string().min(10),
    categoryId: z.number().int().positive(),
    material: z.string().min(2).optional(),
    price: z.number().positive().optional(),
});
