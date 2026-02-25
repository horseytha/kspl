import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { ShoppingCart, ArrowLeft, CheckCircle } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await api.products.getById(id);
                setProduct(data);
            } catch (err) {
                console.error('Error fetching product:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="flex justify-center items-center h-screen bg-white">Loading...</div>;
    if (!product) return <div className="text-center py-20 bg-white">Product not found</div>;

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-[#1a365d] mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Products
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-8">
                        {product.imageUrl ? (
                            <img src={`http://localhost:5000${product.imageUrl}`} alt={product.name} className="w-full h-auto max-h-[500px] object-contain hover:scale-105 transition-transform duration-500" />
                        ) : (
                            <div className="bg-gray-200 w-full aspect-square flex items-center justify-center text-gray-400">No Image</div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="text-[#E3B300] font-bold tracking-widest text-sm uppercase mb-3">Product Specifications</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a365d] mb-6 leading-tight">{product.name}</h1>

                        <div className="text-gray-600 mb-8 space-y-4 text-lg">
                            <p className="leading-relaxed">{product.description}</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-500 font-medium">Material:</span>
                                <span className="text-gray-900 font-bold">{product.material || 'Premium Industrial Steel'}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 font-medium">Estimated Price:</span>
                                <span className="text-[#1a365d] text-2xl font-black">${product.price?.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full bg-[#1a365d] text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-[#2c5282] transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                                <ShoppingCart size={24} /> Add to Quote
                            </button>
                            <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                                <CheckCircle size={16} className="text-green-500" /> Quality Assurance Guaranteed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
