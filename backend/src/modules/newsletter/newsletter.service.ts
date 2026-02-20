import prisma from '../../config/db';

export const subscribe = async (email: string) => {
    const existing = await prisma.newsletterSubscriber.findUnique({
        where: { email },
    });

    if (existing) {
        throw { statusCode: 400, message: 'Email already subscribed' };
    }

    return await prisma.newsletterSubscriber.create({
        data: { email },
    });
};

export const getAllSubscribers = async () => {
    return await prisma.newsletterSubscriber.findMany();
};
