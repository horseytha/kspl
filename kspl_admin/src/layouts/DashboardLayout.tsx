import React from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, Search, User } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-brand-bg flex">
            <Sidebar />

            <div className="flex-1 ml-64">
                <header className="h-16 bg-brand-bg/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 w-96">
                        <Search size={18} className="text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg"></span>
                        </button>

                        <div className="h-8 w-px bg-slate-800"></div>

                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">Admin User</p>
                                <p className="text-xs text-slate-500 uppercase tracking-tighter">Super Admin</p>
                            </div>
                            <div className="w-10 h-10 bg-brand-card rounded-full border border-slate-700 flex items-center justify-center text-slate-300 group-hover:border-brand-accent transition-all">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
