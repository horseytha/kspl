import React from 'react';
import { Link } from 'react-router-dom';

// Import images or use placeholders if specific category images aren't available yet
// Using placeholder colors/text for now, can be replaced with real images
const CategoryCircles = () => {
    const categories = [
        { id: 'pipes', label: 'Pipes', color: 'bg-blue-100', img: 'https://placehold.co/150x150?text=Pipes' },
        { id: 'fittings', label: 'Fittings', color: 'bg-green-100', img: 'https://placehold.co/150x150?text=Fittings' },
        { id: 'valves', label: 'Valves', color: 'bg-orange-100', img: 'https://placehold.co/150x150?text=Valves' },
        { id: 'boilers', label: 'Boilers', color: 'bg-red-100', img: 'https://placehold.co/150x150?text=Boilers' },
    ];

    return (
        <section className="py-12 container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-[color:var(--color-primary)] mb-8">Browse Categories</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {categories.map((cat) => (
                    <Link key={cat.id} to={`/products/${cat.id}`} className="group flex flex-col items-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-[color:var(--color-primary)] transition-all duration-300 relative">
                            <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <span className="mt-4 font-semibold text-gray-700 group-hover:text-[color:var(--color-primary)] transition-colors">
                            {cat.label}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryCircles;
