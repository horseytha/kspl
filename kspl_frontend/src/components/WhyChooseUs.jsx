import React from 'react';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Premium Quality",
            description: "We source only ISO-certified materials that withstand the most demanding industrial environments."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Timely Delivery",
            description: "Our robust logistics network ensures your critical project components arrive exactly when you need them."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Expert Support",
            description: "Decades of collective experience in boiler engineering and industrial supply chain management."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8" />,
            title: "Reliability",
            description: "Trusted by top-tier industrial firms across the country for consistent, high-specification bulk supply."
        }
    ];

    return (
        <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden relative">
            {/* Subtle Texture/Background Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3B300] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E3B300] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[#E3B300] font-bold uppercase tracking-widest text-sm mb-4">Why Choose KSPL</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                            The gold standard in <br />
                            <span className="text-[#E3B300]">Industrial Engineering</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                            KSPL stands for Quality, Speed, Precision, and Logistics. We don't just sell parts; we provide the backbone for your industrial operations.
                        </p>

                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="text-[#E3B300] mt-1 shrink-0">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                                        <p className="text-gray-400">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[#E3B300]/20 rounded-2xl blur-xl group-hover:bg-[#E3B300]/30 transition-all duration-700"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                alt="Industrial Facility"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="text-[#E3B300] font-bold text-5xl mb-2">15+</p>
                                <p className="text-white font-medium uppercase tracking-widest text-sm text-shadow">Years of Industry Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
