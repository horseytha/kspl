import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import boiler1 from '../assets/boiler1.jpg';
import boiler2 from '../assets/boiler2.webp';
import valves from '../assets/valves.jpg';

const HeroBanner = () => {
    const images = [boiler1, boiler2, valves];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-[600px] bg-[#E3B300] flex overflow-hidden">
            {/* Left Content Side (Solid Color) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 relative z-20 text-[#404040]">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
                    <div className="inline-block px-3 py-1 bg-[#404040]/10 border border-[#404040]/20 rounded-full text-sm font-semibold mb-4 text-[#404040]">
                        Industrial Solutions Specialist
                    </div>
                    <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold leading-tight mb-6 text-[#0A0A0A] tracking-tight">
                        Precision <span className="text-white drop-shadow-sm">Boiler</span> <br />
                        <span className="opacity-90">Systems & Parts</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#0A0A0A]/80 mb-10 max-w-lg leading-relaxed font-medium">
                        Supplying premium pipes, fittings, and engineering components
                        for massive-scale industrial projects with ISO-certified quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/products"
                            className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-[#333] transition-all duration-300 shadow-xl hover:shadow-black/20 transform hover:-translate-y-1"
                        >
                            Browse Inventory
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <button
                            type="button"
                            className="flex items-center justify-center border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold hover:bg-[#0A0A0A] hover:text-[#E3B300] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                        >
                            Get a Quote
                            <FileText className="ml-2" size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image Side (Slideshow with Clip Path) */}
            <div className="absolute inset-0 md:static md:w-1/2 h-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                {/* Angled Gradient Overlay for smooth blending along the cut */}
                <div className="absolute inset-0 bg-[linear-gradient(100deg,#E3B300_0%,#E3B300_15%,transparent_50%)] z-10 pointer-events-none"></div>

                {/* Slideshow */}
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover scale-105" />
                        {/* Subtle Overlay to make it feel more industrial */}
                        <div className="absolute inset-0 bg-[#0A0A0A]/20 mix-blend-multiply"></div>
                    </div>
                ))}

                {/* Visual Accent */}
                <div className="absolute bottom-10 right-10 z-20 flex gap-2">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#E3B300]' : 'w-2 bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
