import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    // Mock Data
    const products = Array.from({ length: 9 }).map((_, i) => ({
        id: i + 1,
        name: i % 2 === 0 ? 'Industrial Steel Pipe' : 'Brass Gate Valve',
        category: i % 2 === 0 ? 'Pipes' : 'Valves',
        specs: i % 2 === 0 ? 'ASTM A53, Seamless, 4 inch' : 'PN16, Flanged End',
        image: 'https://placehold.co/400x300?text=Industrial+Product',
        showAddToQuote: true
    }));

    return (
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white p-6 rounded-[4px] shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Filters</h3>

                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Category</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Pipes</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Fittings</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Valves</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Boilers</label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-medium text-gray-700 mb-2">Material</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Carbon Steel</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> Stainless Steel</label>
                            <label className="flex items-center"><input type="checkbox" className="mr-2" /> PVC</label>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-700 mb-2">Size</h4>
                        <select className="w-full border border-gray-300 rounded-[4px] px-2 py-1.5 text-sm">
                            <option>All Sizes</option>
                            <option>1/2 inch</option>
                            <option>1 inch</option>
                            <option>2 inch</option>
                        </select>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[color:var(--color-primary)]">All Products</h1>
                    <span className="text-gray-500 text-sm">Showing 9 items</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Products;
