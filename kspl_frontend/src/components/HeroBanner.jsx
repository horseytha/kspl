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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#0A0A0A]">
                    <span className="text-[#0A0A0A]">Industrial Boiler Systems</span> <br />
                    <span className="text-[#404040]">& Engineering Materials</span>
                </h1>
                <p className="text-lg text-[#404040] mb-8 max-w-lg leading-relaxed">
                    Premium quality pipes, fittings, valves, and boiler components.
                    We provide quotation-based supply for large-scale industrial projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/products"
                        className="btn-primary btn-lg flex items-center justify-center"
                    >
                        Browse Products
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <button
                        type="button"
                        className="flex items-center justify-center border-2 border-[#404040] text-[#404040] px-8 py-3 rounded-[4px] font-semibold hover:bg-[#404040] hover:text-white transition-colors"
                    >
                        Request a Quote
                        <FileText className="ml-2" size={20} />
                    </button>
                </div>
            </div>

            {/* Right Image Side (Slideshow with Clip Path) */}
            <div className="absolute inset-0 md:static md:w-1/2 h-full relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                {/* Angled Gradient Overlay for smooth blending along the cut */}
                <div className="absolute inset-0 bg-[linear-gradient(100deg,#E3B300_0%,#E3B300_10%,transparent_50%)] z-10 pointer-events-none"></div>

                {/* Slideshow */}
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        {/* Optional Dark Overlay for slight contrast if needed, but keeping it clean for now */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroBanner;
