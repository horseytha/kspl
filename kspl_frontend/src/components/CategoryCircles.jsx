import React from 'react';
import { Link } from 'react-router-dom';

// Import images or use placeholders if specific category images aren't available yet
// Using placeholder colors/text for now, can be replaced with real images
const CategoryCircles = () => {
    const categories = [
        { id: 'pipes', label: 'Pipes', img: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=400&fit=crop' },
        { id: 'fittings', label: 'Fittings', img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&fit=crop' },
        { id: 'valves', label: 'Valves', img: 'https://images.unsplash.com/photo-1574639134894-13d6ed7a9d70?q=80&w=400&fit=crop' },
        { id: 'boilers', label: 'Boilers', img: 'https://images.unsplash.com/photo-1581092583537-2abd3da58840?q=80&w=400&fit=crop' },
    ];

    return (
        <section className="py-24 container mx-auto px-6 bg-white">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-sm font-bold text-[#E3B300] uppercase tracking-widest mb-3">Product Portfolio</h2>
                <p className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] text-center">Standardized Excellence Across Categories</p>
                <div className="w-20 h-1.5 bg-[#E3B300] mt-6 rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                {categories.map((cat) => (
                    <Link key={cat.id} to={`/products/${cat.id}`} className="group flex flex-col items-center">
                        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-2xl border-2 border-transparent group-hover:border-[#E3B300] transition-all duration-700">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[#E3B300]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                            <img
                                src={cat.img}
                                alt={cat.label}
                                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                        </div>
                        <span className="mt-6 text-xl font-bold text-[#404040] group-hover:text-[#0A0A0A] transition-colors relative">
                            {cat.label}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#E3B300] group-hover:w-full transition-all duration-500 rounded-full"></span>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryCircles;
