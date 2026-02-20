import prisma from '../../config/db';
import crypto from 'crypto';

export const createResetToken = async (userId: number) => {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour

    await prisma.passwordResetToken.upsert({
        where: { userId },
        update: { token, expiresAt },
        create: { userId, token, expiresAt },
    });

    return token;
};

export const validateResetToken = async (token: string) => {
    const resetToken = await prisma.passwordResetToken.findFirst({
        where: { token },
    });

    if (!resetToken || resetToken.expiresAt < new Date()) {
        return null;
    }

    return resetToken;
};

export const deleteResetToken = async (userId: number) => {
    await prisma.passwordResetToken.delete({
        where: { userId },
    });
};
