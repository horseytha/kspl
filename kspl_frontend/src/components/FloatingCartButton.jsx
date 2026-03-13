import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FloatingCartButton = () => {
    const { totalItems } = useCart();

    return (
        <Link
            to="/cart"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#404040] text-[#E3B300] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#E3B300] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-[#E3B300]"
            title="View Quote Cart"
        >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E3B300] text-[#0A0A0A] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {totalItems}
                </span>
            )}
        </Link>
    );
};

export default FloatingCartButton;
