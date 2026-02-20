import prisma from '../../config/db';

export const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
};

export const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });

    if (!user) {
        throw { statusCode: 404, message: 'User not found' };
    }

    return user;
};

export const deleteUser = async (id: number) => {
    await prisma.user.delete({
        where: { id },
    });
};
