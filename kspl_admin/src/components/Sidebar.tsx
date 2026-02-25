import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Users, Settings, LogOut, ChevronRight } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Products', path: '/products', icon: Package },
        { name: 'Users', path: '/users', icon: Users },
        { name: 'Settings', path: '/settings', icon: Settings },
    ];

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <aside className="w-64 bg-brand-sidebar h-screen fixed left-0 top-0 border-r border-slate-800 flex flex-col transition-all duration-300">
            <div className="p-6">
                <h1 className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white">K</div>
                    KSPL Admin
                </h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-brand-accent text-white shadow-lg shadow-blue-500/20'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                            }`
                        }
                    >
                        <div className="flex items-center gap-3">
                            <item.icon size={20} />
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
