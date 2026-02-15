import React, { useState } from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="h-[70px] bg-[color:var(--color-primary)] text-white flex items-center justify-between px-6 shadow-md relative z-40">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        KSPL <span className="text-sm font-normal opacity-80 ml-2 hidden sm:inline-block">Industrial Solutions</span>
                    </Link>
                </div>

                {/* Center: Search */}
                <div className="hidden md:flex flex-1 max-w-lg mx-6">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search boilers, pipes, valves..."
                            className="w-full pl-10 pr-4 py-2 rounded-[4px] text-gray-900 bg-white border border-[color:var(--color-background)] focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Right: Actions */}
                <ul className="flex items-center space-x-6 text-sm font-medium">
                    <li><Link to="/about" className="hover:opacity-80 transition-opacity hidden md:block">About</Link></li>
                    <li><Link to="/faq" className="hover:opacity-80 transition-opacity hidden md:block">FAQ</Link></li>
                    <li><Link to="/contact" className="hover:opacity-80 transition-opacity hidden md:block">Contact</Link></li>
                    <li>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity border border-white/30 px-3 py-1.5 rounded-[4px]"
                        >
                            <User size={18} />
                            <span>Partner Login</span>
                        </button>
                    </li>
                    {/* Mobile menu placeholder */}
                    <li className="md:hidden">
                        <Menu size={24} />
                    </li>
                </ul>
            </nav>

            <LoginRegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
