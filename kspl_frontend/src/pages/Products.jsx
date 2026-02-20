import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter State
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const query = new URLSearchParams();
                if (selectedCategory) query.append('category', selectedCategory);
                if (selectedMaterial) query.append('material', selectedMaterial);
                if (minPrice) query.append('minPrice', minPrice);
                if (maxPrice) query.append('maxPrice', maxPrice);

                const response = await fetch(`http://localhost:5000/api/products?${query.toString()}`);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory, selectedMaterial, minPrice, maxPrice]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(prev => prev === category ? '' : category);
    };

    const handleMaterialChange = (material) => {
        setSelectedMaterial(prev => prev === material ? '' : material);
    };

    return (
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white p-6 rounded-[4px] shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Filters</h3>

                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Category</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['PIPES', 'FITTINGS', 'VALVES', 'BOILERS'].map(cat => (
                                <label key={cat} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedCategory === cat}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Material</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            {['Steel', 'Stainless Steel', 'PVC', 'Brass'].map(mat => (
                                <label key={mat} className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedMaterial === mat}
                                        onChange={() => handleMaterialChange(mat)}
                                    />
                                    {mat}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                        <div className="flex gap-2 mb-2">
                            <input
                                type="number" placeholder="Min"
                                className="w-full border p-1 rounded"
                                value={minPrice} onChange={e => setMinPrice(e.target.value)}
                            />
                            <input
                                type="number" placeholder="Max"
                                className="w-full border p-1 rounded"
                                value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[color:var(--color-primary)]">All Products</h1>
                    <span className="text-gray-500 text-sm">Showing {products.length} items</span>
                </div>

                {loading ? (
                    <div className="text-center py-10">Loading products...</div>
                ) : error ? (
                    <div className="text-center py-10 text-red-500">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                )}

                {!loading && products.length === 0 && (
                    <div className="text-center py-10 text-gray-500">No products found matching your filters.</div>
                )}
            </main>
        </div>
    );
};

export default Products;
