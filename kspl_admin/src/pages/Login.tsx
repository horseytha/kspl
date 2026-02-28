import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await api.auth.login(email, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.user.role);
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-sidebar rounded-[4px] shadow-md mb-5">
                        <Lock className="text-brand-accent" size={24} />
                    </div>
                    <h1 className="text-3xl font-extrabold text-brand-text mb-1">
                        <span className="text-brand-accent">KSPL</span> Admin
                    </h1>
                    <p className="text-brand-text-muted text-sm">Sign in to manage the product catalog</p>
                </div>

                {/* Card */}
                <div className="bg-white border border-brand-border rounded-[4px] p-8 shadow-sm">
                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-[4px] text-red-600 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-brand-text">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted" size={16} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-brand-bg border border-brand-border rounded-[4px] py-3 pl-10 pr-4 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-brand-text-muted text-sm"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-semibold text-brand-text">Password</label>
                                <button type="button" className="text-brand-accent hover:underline text-xs font-medium">Forgot?</button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted" size={16} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-brand-bg border border-brand-border rounded-[4px] py-3 pl-10 pr-4 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-brand-text-muted text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-accent hover:bg-brand-accent-dark disabled:opacity-50 text-[#0A0A0A] font-bold py-3 rounded-[4px] shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-2"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-6 text-brand-text-muted text-xs">
                    Protected by industrial-grade encryption.
                </p>
            </div>
        </div>
    );
};

export default Login;
