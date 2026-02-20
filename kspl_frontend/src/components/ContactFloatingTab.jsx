import React, { useState } from 'react';
import { Mail, Phone, MapPin, X, MessageCircle } from 'lucide-react';

const ContactFloatingTab = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Contact Popup */}
            {isOpen && (
                <div className="mb-4 w-72 sm:w-80 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-[#404040] p-4 text-white flex justify-between items-center">
                        <h3 className="font-bold text-lg">Contact KSPL</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-5 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-[#E3B300]/10 p-2 rounded-lg text-[#E3B300]">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Call Us</p>
                                <p className="text-sm font-medium text-gray-800">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-[#E3B300]/10 p-2 rounded-lg text-[#E3B300]">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                                <p className="text-sm font-medium text-gray-800">sales@kspl-industrial.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-[#E3B300]/10 p-2 rounded-lg text-[#E3B300]">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office</p>
                                <p className="text-sm font-medium text-gray-800">Peenya, Bangalore</p>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="block w-full py-2 bg-[#E3B300] text-black text-center font-bold rounded-md hover:bg-[#C89A00] transition-colors mt-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Visit Contact Page
                        </a>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${isOpen
                        ? 'bg-gray-200 text-gray-700'
                        : 'bg-[#E3B300] text-black font-bold'
                    }`}
            >
                <div className="flex items-baseline">
                    <span className="text-xl tracking-tighter">KSPL</span>
                    {!isOpen && <MessageCircle size={18} className="ml-2 animate-bounce" />}
                </div>
                {isOpen ? <X size={20} /> : null}
            </button>
        </div>
    );
};

export default ContactFloatingTab;
