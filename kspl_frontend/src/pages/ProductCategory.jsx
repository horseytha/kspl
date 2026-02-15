import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
    const { category } = useParams();
    const title = category.charAt(0).toUpperCase() + category.slice(1);

    // Mock Data filtered by category (conceptual)
    const products = Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        name: `${title} Product ${i + 1}`,
        category: title,
        specs: 'Standard Specification',
        image: `https://placehold.co/400x300?text=${title}+${i + 1}`,
        showAddToQuote: true
    }));

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[color:var(--color-primary)] mb-2">{title}</h1>
                <p className="text-gray-600">Browse our premium range of industrial {category}.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default ProductCategory;
