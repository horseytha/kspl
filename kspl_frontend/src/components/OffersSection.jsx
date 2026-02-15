import React from 'react';
import { Truck, ShieldCheck, Settings } from 'lucide-react';

const OffersSection = () => {
    const features = [
        {
            icon: <Truck size={32} />,
            title: "Bulk Orders Available",
            description: "Optimized logistics for large-scale industrial supply and wholesale requirements."
        },
        {
            icon: <Settings size={32} />,
            title: "Custom Fabrication",
            description: "Tailored manufacturing solutions to meet specific project specifications and dimensions."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "ISO Certified Materials",
            description: "All products meet international quality standards with full traceability and certification."
        }
    ];

    return (
        <section className="bg-white py-16 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="bg-[color:var(--color-background)] p-4 rounded-full text-[color:var(--color-primary)] mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
