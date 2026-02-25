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
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-white mb-2">Dashboard Overview</h2>
                <p className="text-slate-400">Real-time metrics for KSPL Industrial Boilers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <DashboardCard
                    title="Total Products"
                    value={stats?.totalProducts || 0}
                    icon={Package}
                    color="#3B82F6"
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
            <div className="mt-12 bg-brand-card border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center py-20 grayscale opacity-50">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="text-slate-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Analytics Engine Initializing</h3>
                <p className="max-w-md text-slate-500">
                    Once the system collects more data, you'll see advanced growth trajectories and product performance charts here.
                </p>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
