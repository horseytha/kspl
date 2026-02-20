import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginRegisterModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
            const body = isLogin ? { email, password } : { name, email, password };

            const response = await fetch(`http://localhost:5000${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            // Save token
            localStorage.setItem('token', data.token);
            alert(isLogin ? 'Login Successful' : 'Registration Successful');
            onClose();
            window.location.reload(); // Simple way to update UI state
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#404040] hover:text-[#0A0A0A]"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-semibold text-[#E3B300] mb-6 text-center">
                    {isLogin ? 'Login' : 'Register Company'}
                </h2>

                {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Company Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-[#E0DCD4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3B300] text-[#0A0A0A]"
                                placeholder="Industrial Solutions Ltd."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-[#E0DCD4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3B300] text-[#0A0A0A]"
                            placeholder="contact@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#0A0A0A] mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-[#E0DCD4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3B300] text-[#0A0A0A]"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary btn-block"
                    >
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-[#404040]">
                    {isLogin ? "New partner? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#E3B300] font-medium hover:underline"
                    >
                        {isLogin ? 'Register here' : 'Login here'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterModal;
