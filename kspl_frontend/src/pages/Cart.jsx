import React, { useState } from 'react';
import { ShoppingCart, Trash2, ArrowRight, PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import OtpModal from '../components/OtpModal';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalItems } = useCart();
    const [isOtpOpen, setIsOtpOpen] = useState(false);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <PackageOpen size={64} className="text-[#E0DCD4] mb-4" />
                <h2 className="text-2xl font-bold text-[#0A0A0A] mb-2">Your cart is empty</h2>
                <p className="text-[#404040] mb-6">Browse our products and add items you'd like to request a quote for.</p>
                <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                    <ShoppingCart size={18} /> Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-10 max-w-5xl">
            <h1 className="text-2xl font-bold text-[#0A0A0A] mb-8 flex items-center gap-3">
                <ShoppingCart size={28} className="text-[#E3B300]" /> Your Quote Cart ({totalItems})
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-white border border-[#E0DCD4] rounded-[4px] p-4 shadow-sm">
                            <div className="w-20 h-20 rounded-[4px] overflow-hidden flex-shrink-0 bg-[#F5F2EA]">
                                <img src={item.image || 'https://placehold.co/80x80?text=No+Image'} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-[#0A0A0A]">{item.name}</h3>
                                <p className="text-xs text-[#404040] mb-2">{item.category} | Size: {item.size}</p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="w-7 h-7 border border-[#E0DCD4] rounded flex items-center justify-center text-[#404040] hover:border-[#E3B300] hover:text-[#E3B300] transition-colors" disabled={item.quantity <= 1}>-</button>
                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="w-7 h-7 border border-[#E0DCD4] rounded flex items-center justify-center text-[#404040] hover:border-[#E3B300] hover:text-[#E3B300] transition-colors">+</button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.id, item.size)} className="text-[#404040] hover:text-red-500 transition-colors p-1 self-start">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white border border-[#E0DCD4] rounded-[4px] p-6 shadow-sm sticky top-6">
                        <h3 className="font-bold text-lg text-[#0A0A0A] mb-4 border-b border-[#E0DCD4] pb-3">Order Summary</h3>
                        <div className="flex justify-between font-semibold text-[#0A0A0A] mb-6">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>
                        <button onClick={() => setIsOtpOpen(true)} className="btn-primary btn-block flex items-center justify-center gap-2">
                            Request a Quote <ArrowRight size={16} />
                        </button>
                        <Link to="/products" className="block text-center text-sm text-[#404040] hover:text-[#E3B300] mt-4">
                            ← Continue browsing
                        </Link>
                    </div>
                </div>
            </div>

            <OtpModal isOpen={isOtpOpen} onClose={() => setIsOtpOpen(false)} cartItems={cart} />
        </div>
    );
};

export default Cart;
