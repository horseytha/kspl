import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create Categories
    const pipes = await prisma.category.upsert({
        where: { slug: 'pipes' },
        update: {},
        create: {
            name: 'Pipes',
            slug: 'pipes',
            imageUrl: 'https://images.unsplash.com/photo-1535063406547-0b1e4575e92e?auto=format&fit=crop&q=80&w=300&h=300',
            isFeatured: true,
        },
    });

    const fittings = await prisma.category.upsert({
        where: { slug: 'fittings' },
        update: {},
        create: {
            name: 'Fittings',
            slug: 'fittings',
            imageUrl: 'https://images.unsplash.com/photo-1533924391662-7945d81b37c0?auto=format&fit=crop&q=80&w=300&h=300',
            isFeatured: true,
        },
    });

    // Create Products
    await prisma.product.createMany({
        data: [
            {
                name: 'Industrial Steel Pipe',
                description: 'High strength industrial steel pipe for heavy duty applications.',
                price: 500,
                material: 'Steel',
                imageUrl: 'https://images.unsplash.com/photo-1567675713437-01053c64c781?auto=format&fit=crop&q=80&w=400&h=300',
                categoryId: pipes.id,
                isFeatured: true,
            },
            {
                name: 'Copper Fitting',
                description: 'Durable copper fitting for plumbing.',
                price: 150,
                material: 'Copper',
                imageUrl: 'https://images.unsplash.com/photo-1621257406399-6e3e15555464?auto=format&fit=crop&q=80&w=400&h=300',
                categoryId: fittings.id,
                isFeatured: true,
            },
            {
                name: 'PVC Pipe',
                description: 'Lightweight and durable PVC pipe.',
                price: 50,
                material: 'PVC',
                imageUrl: 'https://images.unsplash.com/photo-1610128960762-b4352f1f3323?auto=format&fit=crop&q=80&w=400&h=300',
                categoryId: pipes.id,
                isFeatured: false,
            }
        ],
    });

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
