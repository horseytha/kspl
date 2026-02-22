import prisma from '../../config/db';

export const createProduct = async (data: any) => {
    return await prisma.product.create({ data });
};

export const getAllProducts = async () => {
    return await prisma.product.findMany({
        include: { category: true }
    });
};

export const getProductByCategory = async (slug: string) => {
    return await prisma.product.findMany({
        where: {
            category: {
                slug: slug
            }
        },
        include: { category: true }
    });
};

export const getFeaturedProducts = async () => {
    return await prisma.product.findMany({
        where: { isFeatured: true },
        include: { category: true }
    });
};

export const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: { id },
        include: { category: true }
    });

    if (!product) {
        throw { statusCode: 404, message: 'Product not found' };
    }
    return product;
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
