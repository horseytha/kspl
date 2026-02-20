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
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E3B300]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#E3B300] uppercase tracking-widest mb-3">Our Value Proposition</h2>
                    <p className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A]">Tailored Solutions for Industrial Excellence</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#E3B300]/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center"
                        >
                            <div className="bg-[#0A0A0A] p-5 rounded-2xl text-[#E3B300] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">{feature.title}</h3>
                            <p className="text-[#404040]/80 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
