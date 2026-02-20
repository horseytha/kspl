import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetching all products and taking first 4. Ideally, backend should support ?limit=4
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data.slice(0, 4));
            } catch (err) {
                console.error('Failed to fetch featured products', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <div className="mt-8 text-center sm:hidden">
                <Link to="/products" className="text-[#E3B300] font-semibold hover:text-[#C89A00] transition-colors">
                    View All Products →
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProducts;
