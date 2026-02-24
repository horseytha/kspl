import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { totalItems } = useCart();

    return (
        <nav className="h-[70px] bg-[#404040] text-white flex items-center justify-between px-6 shadow-lg relative z-40">
            {/* Left: Logo */}
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    <span className="text-[#E3B300]">KSPL</span> <span className="text-sm font-normal opacity-80 ml-2 hidden sm:inline-block">Industrial Solutions</span>
                </Link>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-6">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search boilers, pipes, valves..."
                        className="w-full pl-10 pr-4 py-2 rounded-[4px] text-[#0A0A0A] bg-white border border-[#E3B300] focus:outline-none focus:ring-2 focus:ring-[#E3B300] focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-2.5 text-[#404040]" size={18} />
                </div>
            </div>

            {/* Right: Actions */}
            <ul className="flex items-center space-x-6 text-sm font-medium text-white">
                <li><Link to="/about" className="hover:text-[#E3B300] transition-colors hidden md:block">About</Link></li>
                <li><Link to="/faq" className="hover:text-[#E3B300] transition-colors hidden md:block">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-[#E3B300] transition-colors hidden md:block">Contact</Link></li>

                {/* Cart Icon */}
                <li>
                    <Link
                        to="/cart"
                        className="relative flex items-center gap-1.5 border-2 border-[#E3B300] text-[#E3B300] px-3 py-1.5 rounded-[4px] hover:bg-[#E3B300] hover:text-white transition-colors group"
                    >
                        <ShoppingCart size={18} />
                        <span className="hidden sm:inline">Cart</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#E3B300] group-hover:bg-white text-[#0A0A0A] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </li>

                {/* Mobile menu placeholder */}
                <li className="md:hidden">
                    <Menu size={24} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
