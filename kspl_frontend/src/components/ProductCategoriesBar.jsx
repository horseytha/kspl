import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCategoriesBar = () => {
    const categories = [
        { id: 'pipes', label: 'Pipes' },
        { id: 'fittings', label: 'Fittings' },
        { id: 'valves', label: 'Valves' },
        { id: 'boilers', label: 'Boilers' },
        { id: 'insulation', label: 'Insulation' },
    ];

    return (
        <div className="bg-white border-b border-[#E0DCD4] shadow-sm overflow-x-auto">
            <div className="container mx-auto px-4 flex space-x-8 h-12 items-center text-sm font-medium min-w-max">
                <NavLink
                    to="/products"
                    end
                    className={({ isActive }) =>
                        `cursor-pointer py-3 border-b-2 transition-colors ${isActive ? 'border-[#E3B300] text-[#E3B300]' : 'border-transparent text-[#404040] hover:text-[#0A0A0A]'}`
                    }
                >
                    All Products
                </NavLink>

                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        to={`/products/${cat.id}`}
                        className={({ isActive }) =>
                            `cursor-pointer py-3 border-b-2 transition-colors ${isActive ? 'border-[#E3B300] text-[#E3B300]' : 'border-transparent text-[#404040] hover:text-[#0A0A0A]'}`
                        }
                    >
                        {cat.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default ProductCategoriesBar;
