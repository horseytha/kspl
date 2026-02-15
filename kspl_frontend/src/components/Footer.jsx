import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0b1e2b] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-6">KSPL</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Leading supplier of industrial boiler components, pipes, and engineering materials. Dedicated to quality and reliability.
                        </p>
                        <div className="text-sm text-gray-400">
                            <p>Email: info@kspl-industrial.com</p>
                            <p>Phone: +91 98765 43210</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-6 text-gray-200">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-6 text-gray-200">Categories</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/products/pipes" className="hover:text-white transition-colors">Industrial Pipes</Link></li>
                            <li><Link to="/products/valves" className="hover:text-white transition-colors">Valves</Link></li>
                            <li><Link to="/products/fittings" className="hover:text-white transition-colors">Fittings</Link></li>
                            <li><Link to="/products/boilers" className="hover:text-white transition-colors">Boiler Parts</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact Placeholder */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-6 text-gray-200">Stay Connected</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest stock updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-[4px] focus:outline-none w-full text-sm border border-gray-700"
                            />
                            <button className="bg-[color:var(--color-primary)] px-4 py-2 rounded-r-[4px] hover:opacity-90 transition-opacity text-sm font-medium">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} KSPL Industrial Solutions. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
