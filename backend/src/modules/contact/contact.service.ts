import prisma from '../../config/db';

export const createContactMessage = async (data: any) => {
    return await prisma.contactMessage.create({ data });
};

export const getAllMessages = async () => {
    return await prisma.contactMessage.findMany({
        orderBy: { createdAt: 'desc' },
    });
};
