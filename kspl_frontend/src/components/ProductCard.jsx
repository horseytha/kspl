import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Standard');
    const [added, setAdded] = useState(false);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, quantity, size);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-white rounded-[4px] shadow-sm hover:shadow-2xl border border-[#E0DCD4] transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden flex flex-col h-full group">
            <div className="h-48 bg-[#F5F2EA] relative overflow-hidden">
                <img
                    src={product.imageUrl || 'https://placehold.co/400x300?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-[#E3B300] text-[#0A0A0A] text-xs font-bold px-2 py-1 rounded-[2px] uppercase z-10">
                    {product.category?.name || 'Product'}
                </span>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-[#0A0A0A] mb-2">{product.name}</h3>
                <p className="text-sm text-[#404040] mb-4 flex-grow line-clamp-2">{product.description || product.specs}</p>

                {product.price && (
                    <p className="text-[#E3B300] font-bold mb-4">${product.price}</p>
                )}

                <div className="mt-auto space-y-2">
                    <div className="flex gap-2">
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-2/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                        >
                            <option value="Standard">Size: Standard</option>
                            <option value="Large">Size: Large</option>
                        </select>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            min="1"
                            className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-1/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                        />
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={`btn-block flex items-center justify-center gap-2 transition-all duration-300 ${added
                                ? 'bg-green-600 text-white rounded-[4px] py-2 text-sm font-semibold'
                                : 'btn-dark hover:bg-[#E3B300] hover:text-[#0A0A0A]'
                            }`}
                    >
                        {added ? (
                            <><Check size={16} /> Added!</>
                        ) : (
                            <><ShoppingCart size={16} /> Add to Cart</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
