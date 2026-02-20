import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
    const { category } = useParams();
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                // Assuming backend expects uppercase category
                const response = await fetch(`http://localhost:5000/api/products?category=${category.toUpperCase()}`);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[color:var(--color-primary)] mb-2">{title}</h1>
                <p className="text-gray-600">Browse our premium range of industrial {category}.</p>
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}

            {!loading && products.length === 0 && (
                <div className="text-center text-gray-500">No products found in this category.</div>
            )}
        </div>
    );
};

export default ProductCategory;
