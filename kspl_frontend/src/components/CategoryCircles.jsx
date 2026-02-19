import React from 'react';
import { Link } from 'react-router-dom';

// Import images or use placeholders if specific category images aren't available yet
// Using placeholder colors/text for now, can be replaced with real images
const CategoryCircles = () => {
    const categories = [
        { id: 'pipes', label: 'Pipes', color: 'bg-[#FFF8E1]', img: 'https://placehold.co/150x150?text=Pipes' },
        { id: 'fittings', label: 'Fittings', color: 'bg-[#F5E4B8]', img: 'https://placehold.co/150x150?text=Fittings' },
        { id: 'valves', label: 'Valves', color: 'bg-[#E3D5BC]', img: 'https://placehold.co/150x150?text=Valves' },
        { id: 'boilers', label: 'Boilers', color: 'bg-[#D4C4AA]', img: 'https://placehold.co/150x150?text=Boilers' },
    ];

    return (
        <section className="py-12 container mx-auto px-6 bg-white">
            <h2 className="text-2xl font-bold text-center text-[#E3B300] mb-8">Browse Categories</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {categories.map((cat) => (
                    <Link key={cat.id} to={`/products/${cat.id}`} className="group flex flex-col items-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-[#E3B300] transition-all duration-300 relative">
                            <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <span className="mt-4 font-semibold text-[#0A0A0A] group-hover:text-[#E3B300] transition-colors">
                            {cat.label}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryCircles;
