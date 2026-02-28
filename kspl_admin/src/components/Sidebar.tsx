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
        <aside className="w-64 bg-brand-sidebar h-screen fixed left-0 top-0 flex flex-col shadow-lg">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <h1 className="text-xl font-bold text-white tracking-wider flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-accent rounded-[4px] flex items-center justify-center text-[#0A0A0A] font-extrabold text-sm">K</div>
                    <span>KSPL <span className="text-brand-accent">Admin</span></span>
                </h1>
            </div>

            <nav className="flex-1 px-3 py-5 space-y-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3 rounded-[4px] transition-all duration-200 group ${isActive
                                ? 'bg-brand-accent text-[#0A0A0A] font-semibold shadow-sm'
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`
                        }
                    >
                        <div className="flex items-center gap-3">
                            <item.icon size={18} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </div>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/10 rounded-[4px] transition-all duration-200 text-sm"
                >
                    <LogOut size={18} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
