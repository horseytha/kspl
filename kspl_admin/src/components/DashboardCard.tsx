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
        <div className="bg-brand-card border border-brand-border p-6 rounded-[4px] hover:shadow-md transition-all group overflow-hidden relative shadow-sm">
            <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: color }}
            />

            <div className="flex items-center justify-between mb-4">
                <div
                    className="p-3 rounded-[4px]"
                    style={{ backgroundColor: `${color}18`, color: color }}
                >
                    <Icon size={22} />
                </div>
                {trend && (
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">
                        {trend}
                    </span>
                )}
            </div>

            <h3 className="text-brand-text-muted text-sm font-medium mb-1">{title}</h3>
            <p className="text-3xl font-bold text-brand-text tracking-tight">{value}</p>
        </div>
    );
};

export default DashboardCard;
