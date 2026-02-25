import React, { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { api } from '../services/api';
import { Plus, Trash2, Edit, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const data = await api.products.getAll();
            setProducts(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await api.products.delete(id);
                fetchProducts();
            } catch (err) {
                alert('Failed to delete product');
            }
        }
    };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2">Product Inventory</h2>
                    <p className="text-slate-400">Manage your industrial catalog and technical specs</p>
                </div>
                <Link
                    to="/products/add"
                    className="bg-brand-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                >
                    <Plus size={20} />
                    Add New Product
                </Link>
            </div>

            <div className="bg-brand-card border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900/50 border-b border-slate-800">
                                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Product</th>
                                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
                                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Price</th>
                                <th className="px-8 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {loading ? (
                                [1, 2, 3].map(i => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-8 py-6"><div className="h-12 w-48 bg-slate-800 rounded-xl"></div></td>
                                        <td className="px-8 py-6"><div className="h-6 w-24 bg-slate-800 rounded-xl"></div></td>
                                        <td className="px-8 py-6"><div className="h-6 w-16 bg-slate-800 rounded-xl"></div></td>
                                        <td className="px-8 py-6"><div className="h-10 w-24 bg-slate-800 rounded-xl ml-auto"></div></td>
                                    </tr>
                                ))
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-slate-500">No products found. Start by adding one.</td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                                                    {product.imageUrl ? (
                                                        <img src={`http://localhost:5000${product.imageUrl}`} className="w-full h-full object-cover" alt="" />
                                                    ) : (
                                                        <ImageIcon size={20} className="text-slate-700" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold group-hover:text-brand-accent transition-colors">{product.name}</p>
                                                    <p className="text-slate-500 text-sm truncate max-w-xs">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-slate-400 capitalize">{product.category?.name || 'General'}</td>
                                        <td className="px-8 py-5 font-bold text-emerald-400">${product.price?.toLocaleString()}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all">
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <a href={`http://localhost:5173/products/${product.id}`} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-brand-accent hover:bg-brand-accent/10 rounded-xl transition-all">
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Products;
