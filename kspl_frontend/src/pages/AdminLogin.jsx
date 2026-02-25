import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await api.auth.login(email, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.user.role);
            navigate('/admin/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1a365d]">
                        KSPL Admin Portal
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please sign in to manage products
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && <div className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-md border border-red-100">{error}</div>}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#1a365d] focus:border-[#1a365d] focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#1a365d] focus:border-[#1a365d] focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#1a365d] hover:bg-[#2c5282] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d] transition-colors shadow-md"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
