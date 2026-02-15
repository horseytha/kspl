import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginRegisterModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-semibold text-[color:var(--color-primary)] mb-6 text-center">
                    {isLogin ? 'Login' : 'Register Company'}
                </h2>

                <form className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]"
                                placeholder="Industrial Solutions Ltd."
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]"
                            placeholder="contact@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="button" // Static demo
                        className="w-full bg-[color:var(--color-primary)] text-white py-2 rounded-md hover:opacity-90 transition-opacity font-medium"
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? "New partner? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[color:var(--color-primary)] font-medium hover:underline"
                    >
                        {isLogin ? 'Register here' : 'Login here'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterModal;
