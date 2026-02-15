import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-[4px] shadow-sm hover:shadow-md border border-gray-100 transition-shadow overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-gray-100 relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-[color:var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded-[2px] uppercase">
                    {product.category}
                </span>
                {/* Overlay for "Quick View" could go here */}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">{product.specs}</p>

                {/* Quantity and Add to Quote for Product List pages explicitly? 
            The requirement says "Add to Quote" button for Category Page. 
            Featured products had "View Details". 
            I'll make the button configurable or just default to View Details for now.
        */}

                {product.showAddToQuote ? (
                    <div className="mt-auto space-y-2">
                        <div className="flex gap-2">
                            <select className="border border-gray-300 rounded-[2px] px-2 py-1 text-sm w-2/3">
                                <option>Size: Standard</option>
                                <option>Size: Large</option>
                            </select>
                            <input type="number" defaultValue="1" min="1" className="border border-gray-300 rounded-[2px] px-2 py-1 text-sm w-1/3" />
                        </div>
                        <button className="w-full bg-[color:var(--color-primary)] text-white py-2 rounded-[4px] hover:opacity-90 transition-opacity text-sm font-medium">
                            Add to Quote
                        </button>
                    </div>
                ) : (
                    <Link to={`/products/${product.category.toLowerCase()}`} className="w-full block text-center border border-[color:var(--color-primary)] text-[color:var(--color-primary)] py-2 rounded-[4px] hover:bg-[color:var(--color-primary)] hover:text-white transition-colors text-sm font-medium mt-auto">
                        View Details
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
