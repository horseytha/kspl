import React from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, Search, User } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-brand-bg flex">
            <Sidebar />

            <div className="flex-1 ml-64">
                {/* Top Bar */}
                <header className="h-16 bg-white border-b border-brand-border sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3 bg-brand-bg px-4 py-2 rounded-[4px] border border-brand-border w-80">
                        <Search size={16} className="text-brand-text-muted shrink-0" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="bg-transparent border-none outline-none text-sm text-brand-text w-full placeholder:text-brand-text-muted"
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="relative text-brand-text-muted hover:text-brand-text transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>

                        <div className="w-px h-6 bg-brand-border" />

                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Admin User</p>
                                <p className="text-xs text-brand-text-muted uppercase tracking-wider">Super Admin</p>
                            </div>
                            <div className="w-9 h-9 bg-brand-sidebar rounded-full border-2 border-brand-border flex items-center justify-center text-white group-hover:border-brand-accent transition-all">
                                <User size={16} />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
