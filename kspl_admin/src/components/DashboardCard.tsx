import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
    trend?: string;
}

const DashboardCard = ({ title, value, icon: Icon, color, trend }: CardProps) => {
    return (
        <div className="bg-brand-card border border-slate-800 p-6 rounded-3xl hover:border-slate-700 transition-all group overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20`} style={{ backgroundColor: color }}></div>

            <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl" style={{ backgroundColor: `${color}15`, color: color }}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">
                        {trend}
                    </span>
                )}
            </div>

            <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        </div>
    );
};

export default DashboardCard;
