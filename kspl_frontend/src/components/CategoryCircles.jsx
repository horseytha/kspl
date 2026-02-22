import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryCircles = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/categories/featured');
                if (!response.ok) throw new Error('Failed to fetch categories');

                const data = await response.json();

                if (data.length === 0) {
                    const allResponse = await fetch('http://localhost:5000/api/categories');
                    const allData = await allResponse.json();
                    setCategories(allData.slice(0, 4));
                } else {
                    setCategories(data);
                }
            } catch (err) {
                console.error('Failed to fetch categories', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <div className="text-center py-12">Loading Categories...</div>;
    if (categories.length === 0) return null;

    return (
        <section className="py-24 container mx-auto px-6 bg-white">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-sm font-bold text-[#E3B300] uppercase tracking-widest mb-3">
                    Product Portfolio
                </h2>
                <p className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] text-center">
                    Standardized Excellence Across Categories
                </p>
                <div className="w-20 h-1.5 bg-[#E3B300] mt-6 rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                {categories.map((cat) => (
                    <Link key={cat.id} to={`/products/${cat.slug}`} className="group flex flex-col items-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-[#E3B300] transition-all duration-300 relative">
                            <img
                                src={cat.imageUrl || 'https://placehold.co/150x150?text=Category'}
                                alt={cat.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <span className="mt-4 font-semibold text-[#0A0A0A] group-hover:text-[#E3B300] transition-colors">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryCircles;