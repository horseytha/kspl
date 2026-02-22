import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch featured products from DB
                const response = await fetch('http://localhost:5000/api/products/featured');
                if (!response.ok) throw new Error('Failed to fetch featured products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error('Failed to fetch featured products', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section className="py-24 container mx-auto px-6 bg-[#fcfcfc] rounded-3xl mb-24 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                <div>
                    <h2 className="text-sm font-bold text-[#E3B300] uppercase tracking-widest mb-3">Inventory Spotlight</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4">Precision Engineering Parts</h3>
                    <p className="text-[#404040]/70 font-medium max-w-xl">Curated selection of our highest-demand industrial components, engineered for maximum durability and performance.</p>
                </div>
                <Link to="/products" className="group flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#E3B300] hover:text-[#0A0A0A] transition-all duration-500 shadow-xl">
                    View Complete Catalog
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-[400px] bg-gray-100 animate-pulse rounded-2xl"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="animate-in fade-in zoom-in-95 duration-700">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default FeaturedProducts;
