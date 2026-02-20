import prisma from '../../config/db';

export const addToQuote = async (userId: number, productId: number, quantity: number, size?: string) => {
    // 1. Check if user has a PENDING quote
    let quote = await prisma.quote.findFirst({
        where: {
            userId,
            status: 'PENDING',
        },
    });

    // 2. If not, create one
    if (!quote) {
        quote = await prisma.quote.create({
            data: {
                userId,
                status: 'PENDING',
            },
        });
    }

    // 3. Add item to quote (or update quantity if exists - optional, but simple add is requested)
    // Check if item already exists in quote
    const existingItem = await prisma.quoteItem.findFirst({
        where: {
            quoteId: quote.id,
            productId,
            size: size || null,
        },
    });

    if (existingItem) {
        await prisma.quoteItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + quantity },
        });
    } else {
        await prisma.quoteItem.create({
            data: {
                quoteId: quote.id,
                productId,
                quantity,
                size,
            },
        });
    }

    // Return updated quote with items
    return await prisma.quote.findUnique({
        where: { id: quote.id },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
    });
};

export const getQuotesByUser = async (userId: number) => {
    return await prisma.quote.findMany({
        where: { userId },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
    });
};

export const getAllQuotes = async () => {
    return await prisma.quote.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            items: {
                include: {
                    product: true,
                },
            },
        },
    });
};

export const updateQuoteStatus = async (id: number, status: string) => {
    return await prisma.quote.update({
        where: { id },
        data: { status },
    });
};
