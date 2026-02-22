import prisma from '../../config/db';

export const getAllCategories = async () => {
    return await prisma.category.findMany();
};

export const getFeaturedCategories = async () => {
    return await prisma.category.findMany({
        where: { isFeatured: true }
    });
};

export const createCategory = async (data: any) => {
    return await prisma.category.create({ data });
};
