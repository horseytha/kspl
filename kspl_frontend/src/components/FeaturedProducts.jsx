import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: 'High Pressure Seamless Pipe',
            category: 'Pipes',
            specs: 'ASTM A106 Gr. B, Sch 40/80',
            image: 'https://placehold.co/400x300?text=Seamless+Pipe'
        },
        {
            id: 2,
            name: 'Industrial Gate Valve',
            category: 'Valves',
            specs: 'Cast Steel, ANSI 150# - 300#',
            image: 'https://placehold.co/400x300?text=Gate+Valve'
        },
        {
            id: 3,
            name: 'Boiler Tube Bundle',
            category: 'Boilers',
            specs: 'Carbon Steel, Customized Lengths',
            image: 'https://placehold.co/400x300?text=Boiler+Tubes'
        },
        {
            id: 4,
            name: 'Forged Steel Fittings',
            category: 'Fittings',
            specs: 'Socket Weld, Threaded 3000#',
            image: 'https://placehold.co/400x300?text=Forged+Fittings'
        }
    ];

    return (
        <section className="py-16 container mx-auto px-6 bg-white">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-[#E3B300] mb-2">Featured Products</h2>
                    <p className="text-[#404040]">Top-rated industrial components for your engineering needs.</p>
                </div>
                <Link to="/products" className="text-[#E3B300] font-semibold hover:text-[#C89A00] transition-colors hidden sm:block">
                    View All Products →
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
                <Link to="/products" className="text-[#E3B300] font-semibold hover:text-[#C89A00] transition-colors">
                    View All Products →
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProducts;
