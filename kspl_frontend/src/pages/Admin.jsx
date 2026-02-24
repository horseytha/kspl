import React from 'react';
import { FileText, Package, Users, Settings, LogOut, TrendingUp } from 'lucide-react';

const Admin = () => {
    return (
        <div className="min-h-screen bg-[#F5F2EA] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#404040] text-white flex flex-col flex-shrink-0">
                <div className="px-6 py-5 border-b border-white/10 uppercase tracking-widest font-bold text-[#E3B300]">
                    KSPL Admin
                </div>
                <nav className="flex-grow px-4 py-6 space-y-1">
                    {[
                        { label: 'Dashboard', icon: TrendingUp, active: true },
                        { label: 'Quotes', icon: FileText },
                        { label: 'Products', icon: Package },
                        { label: 'Customers', icon: Users },
                        { label: 'Settings', icon: Settings },
                    ].map(({ label, icon: Icon, active }) => (
                        <button
                            key={label}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-[4px] text-sm font-medium transition-colors ${active ? 'bg-[#E3B300] text-[#0A0A0A]' : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <Icon size={18} />
                            {label}
                        </button>
                    ))}
                </nav>
                <div className="px-4 py-5 border-t border-white/10">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-[4px] text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-grow p-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#0A0A0A]">Admin Overview</h1>
                    <p className="text-[#404040] text-sm mt-1">Manage quote requests and products.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: 'Active Quotes', value: '12', icon: FileText },
                        { label: 'Products', value: '45', icon: Package },
                        { label: 'New Inquiries', value: '5', icon: TrendingUp },
                    ].map(({ label, value, icon: Icon }) => (
                        <div key={label} className="bg-white rounded-[4px] shadow-sm border border-[#E0DCD4] p-6 flex items-center gap-4">
                            <div className="bg-[#F5F2EA] p-3 rounded-[4px] text-[#E3B300]">
                                <Icon size={24} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#0A0A0A]">{value}</p>
                                <p className="text-xs text-[#404040]">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-[4px] shadow-sm border border-[#E0DCD4] p-6 text-center text-[#404040]">
                    <FileText size={48} className="mx-auto mb-4 text-[#E0DCD4]" />
                    <p className="font-medium">No recent quotes found.</p>
                    <p className="text-sm">Requests from the Google Form will be linked here once connected.</p>
                </div>
            </main>
        </div>
    );
};

export default Admin;
