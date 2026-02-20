import prisma from '../../config/db';

export const createProduct = async (data: any) => {
    return await prisma.product.create({ data });
};

export const getAllProducts = async () => {
    return await prisma.product.findMany();
};

export const getProductByCategory = async (category: string) => {
    return await prisma.product.findMany({
        where: { category },
    });
};

export const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        throw { statusCode: 404, message: 'Product not found' };
    }
    return product;
};

export const getFilteredProducts = async (filters: any) => {
    const { category, material, minPrice, maxPrice } = filters;

    const where: any = {};

    if (category) where.category = category;
    if (material) where.material = material;
    if (minPrice || maxPrice) {
        where.price = {};
        if (minPrice) where.price.gte = Number(minPrice);
        if (maxPrice) where.price.lte = Number(maxPrice);
    }

    return await prisma.product.findMany({ where });
};

export const updateProduct = async (id: number, data: any) => {
    await getProductById(id);
    return await prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProduct = async (id: number) => {
    await getProductById(id);
    return await prisma.product.delete({
        where: { id },
    });
};
