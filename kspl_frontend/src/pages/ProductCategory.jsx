import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
    const { category } = useParams(); // category here acts as slug based on route definition usually, or we need to change route
    // Wait, the route in frontend App.jsx might be /products/:category
    // user said: /products/pipes -> only pipes.
    // So category param is the slug.

    // Capitalize for title display (optional, or get from backend)
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                // Fetch by slug
                const response = await fetch(`http://localhost:5000/api/products/category/${category}`);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
                // setProducts([]); // Optional: clear products on error
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
                    {products.length > 0 ? (
                        products.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">No products found in this category.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductCategory;
