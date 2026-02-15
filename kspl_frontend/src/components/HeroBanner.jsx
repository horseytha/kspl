import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <section className="relative w-full h-[500px] bg-slate-900 text-white flex items-center">
            {/* Background Image Placeholder using a gradient for now, or a solid color that fits industrial theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)] to-slate-800 opacity-90 z-0"></div>

            {/* Optional: Overlay texture or pattern could go here */}

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-start max-w-4xl">
                <span className="bg-white/10 text-white px-3 py-1 rounded-[4px] text-sm font-medium mb-4 backdrop-blur-sm border border-white/20">
                    ISO 9001:2015 Certified Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Industrial Boiler Systems & <br /> Engineering Materials
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                    Premium quality pipes, fittings, valves, and boiler components.
                    We provide quotation-based supply for large-scale industrial projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/products"
                        className="flex items-center justify-center bg-white text-[color:var(--color-primary)] px-8 py-3 rounded-[4px] font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Browse Products
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <button
                        type="button"
                        className="flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-[4px] font-semibold hover:bg-white/10 transition-colors"
                    >
                        Request a Quote
                        <FileText className="ml-2" size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
