import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-[4px] shadow-sm hover:shadow-lg border border-[#E0DCD4] transition-shadow overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-[#F5F2EA] relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#E3B300] text-[#0A0A0A] text-xs font-bold px-2 py-1 rounded-[2px] uppercase">
                    {product.category}
                </span>
                {/* Overlay for "Quick View" could go here */}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-[#0A0A0A] mb-2">{product.name}</h3>
                <p className="text-sm text-[#404040] mb-4 flex-grow">{product.specs}</p>

                {/* Quantity and Add to Quote for Product List pages explicitly? 
            The requirement says "Add to Quote" button for Category Page. 
            Featured products had "View Details". 
            I'll make the button configurable or just default to View Details for now.
        */}

                {product.showAddToQuote ? (
                    <div className="mt-auto space-y-2">
                        <div className="flex gap-2">
                            <select className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-2/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]">
                                <option>Size: Standard</option>
                                <option>Size: Large</option>
                            </select>
                            <input type="number" defaultValue="1" min="1" className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-1/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]" />
                        </div>
                        <button className="btn-dark btn-block">
                            Add to Quote
                        </button>
                    </div>
                ) : (
                    <Link to={`/products/${product.category.toLowerCase()}`} className="btn-outline btn-block mt-auto">
                        View Details
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
