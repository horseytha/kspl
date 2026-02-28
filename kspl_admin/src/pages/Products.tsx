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
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-extrabold text-brand-text mb-1">Product Inventory</h2>
                    <p className="text-brand-text-muted text-sm">Manage your industrial catalog and technical specs</p>
                </div>
                <Link
                    to="/products/add"
                    className="bg-brand-accent hover:bg-brand-accent-dark text-[#0A0A0A] font-bold py-2.5 px-5 rounded-[4px] flex items-center gap-2 transition-all shadow-sm active:scale-[0.98] text-sm"
                >
                    <Plus size={18} />
                    Add New Product
                </Link>
            </div>

            <div className="bg-white border border-brand-border rounded-[4px] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-brand-bg border-b border-brand-border">
                                <th className="px-6 py-4 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Product</th>
                                <th className="px-6 py-4 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-brand-text-secondary uppercase tracking-widest">Price</th>
                                <th className="px-6 py-4 text-xs font-bold text-brand-text-secondary uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                            {loading ? (
                                [1, 2, 3].map(i => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-5"><div className="h-10 w-48 bg-brand-bg rounded" /></td>
                                        <td className="px-6 py-5"><div className="h-5 w-24 bg-brand-bg rounded" /></td>
                                        <td className="px-6 py-5"><div className="h-5 w-16 bg-brand-bg rounded" /></td>
                                        <td className="px-6 py-5"><div className="h-8 w-20 bg-brand-bg rounded ml-auto" /></td>
                                    </tr>
                                ))
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-16 text-center text-brand-text-muted text-sm">
                                        No products found. Start by adding one.
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-brand-bg/60 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-brand-bg rounded-[4px] border border-brand-border flex items-center justify-center overflow-hidden shrink-0">
                                                    {product.imageUrl ? (
                                                        <img src={`http://localhost:5000${product.imageUrl}`} className="w-full h-full object-cover" alt="" />
                                                    ) : (
                                                        <ImageIcon size={18} className="text-brand-text-muted" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-brand-text font-semibold text-sm group-hover:text-brand-accent transition-colors">{product.name}</p>
                                                    <p className="text-brand-text-muted text-xs truncate max-w-xs">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-brand-text-secondary text-sm capitalize">{product.category?.name || 'General'}</td>
                                        <td className="px-6 py-4 font-bold text-green-700 text-sm">${product.price?.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-brand-text-muted hover:text-brand-text hover:bg-brand-bg rounded-[4px] transition-all border border-transparent hover:border-brand-border">
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-brand-text-muted hover:text-red-600 hover:bg-red-50 rounded-[4px] transition-all border border-transparent hover:border-red-200"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                                <a
                                                    href={`http://localhost:5173/products/${product.id}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 text-brand-text-muted hover:text-brand-accent hover:bg-brand-accent/10 rounded-[4px] transition-all border border-transparent hover:border-brand-accent/30"
                                                >
                                                    <ExternalLink size={16} />
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
