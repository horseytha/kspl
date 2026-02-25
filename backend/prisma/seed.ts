import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create Admin User
    const adminPassword = await bcrypt.hash('adminpassword123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@kspl.com' },
        update: {},
        create: {
            name: 'KSPL Admin',
            email: 'admin@kspl.com',
            password: adminPassword,
            role: 'ADMIN',
        },
    });
    console.log('Admin user created: admin@kspl.com / adminpassword123');

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
    const existingProducts = await prisma.product.count();
    if (existingProducts === 0) {
        await prisma.product.createMany({
            data: [
                {
                    name: 'Industrial Steel Pipe',
                    description: 'High strength industrial steel pipe for heavy duty applications.',
                    price: 500,
                    material: 'Steel',
                    imageUrl: '/uploads/products/sample-pipe.jpg',
                    categoryId: pipes.id,
                    isFeatured: true,
                },
                {
                    name: 'Copper Fitting',
                    description: 'Durable copper fitting for plumbing.',
                    price: 150,
                    material: 'Copper',
                    imageUrl: '/uploads/products/sample-fitting.jpg',
                    categoryId: fittings.id,
                    isFeatured: true,
                }
            ],
        });
        console.log('Sample products seeded.');
    }

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
