import React, { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardCard from '../components/DashboardCard';
import { Package, FileText, Users, TrendingUp } from 'lucide-react';
import { api } from '../services/api';

const Dashboard = () => {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await api.stats.getOverview();
                setStats(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStats();
    }, []);

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-brand-text mb-1">Dashboard Overview</h2>
                <p className="text-brand-text-muted text-sm">Real-time metrics for KSPL Industrial Boilers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard
                    title="Total Products"
                    value={stats?.totalProducts || 0}
                    icon={Package}
                    color="#E3B300"
                    trend="+12% this month"
                />
                <DashboardCard
                    title="Quote Requests"
                    value={stats?.totalQuotes || 0}
                    icon={FileText}
                    color="#A855F7"
                    trend="+5 new today"
                />
                <DashboardCard
                    title="System Users"
                    value={stats?.totalUsers || 0}
                    icon={Users}
                    color="#10B981"
                />
            </div>

            {/* Placeholder for charts or recent activity */}
            <div className="mt-10 bg-white border border-brand-border rounded-[4px] p-10 flex flex-col items-center justify-center text-center opacity-60">
                <div className="w-14 h-14 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center mb-5">
                    <TrendingUp className="text-brand-text-muted" size={28} />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">Analytics Engine Initializing</h3>
                <p className="max-w-md text-brand-text-muted text-sm">
                    Once the system collects more data, you'll see advanced growth trajectories and product performance charts here.
                </p>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
