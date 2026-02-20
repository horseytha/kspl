import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Create Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@kspl.com' },
        update: {},
        create: {
            name: 'Admin User',
            email: 'admin@kspl.com',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log({ admin });

    // Create Products
    const products = [
        {
            name: 'Industrial Steel Pipe',
            description: 'High-quality steel pipe for industrial use.',
            category: 'PIPES',
            material: 'Steel',
            price: 150.0,
        },
        {
            name: 'PVC Pipe',
            description: 'Durable PVC pipe for plumbing.',
            category: 'PIPES',
            material: 'PVC',
            price: 50.0,
        },
        {
            name: 'Brass Valve',
            description: 'Heavy-duty brass valve.',
            category: 'VALVES',
            material: 'Brass',
            price: 75.0,
        },
        {
            name: 'Stainless Steel Fitting',
            description: 'Corrosion-resistant fitting.',
            category: 'FITTINGS',
            material: 'Stainless Steel',
            price: 30.0,
        },
        {
            name: 'Industrial Boiler',
            description: 'High-efficiency industrial boiler.',
            category: 'BOILERS',
            material: 'Steel',
            price: 5000.0,
        },
    ];

    for (const product of products) {
        const p = await prisma.product.create({
            data: product,
        });
        console.log(`Created product with id: ${p.id}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
