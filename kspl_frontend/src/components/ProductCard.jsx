import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('Standard');

    const handleAddToQuote = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Please login to add items to your quote.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/quotes/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    productId: product.id,
                    quantity: parseInt(quantity),
                    size: size
                })
            });

            if (response.ok) {
                alert("Product added to quote successfully!");
            } else {
                const data = await response.json();
                alert(`Failed to add: ${data.message}`);
            }
        } catch (error) {
            console.error('Error adding to quote:', error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-white rounded-[4px] shadow-sm hover:shadow-lg border border-[#E0DCD4] transition-shadow overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-[#F5F2EA] relative group">
                <img src={product.image || 'https://placehold.co/400x300?text=No+Image'} alt={product.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-[#E3B300] text-[#0A0A0A] text-xs font-bold px-2 py-1 rounded-[2px] uppercase">
                    {product.category}
                </span>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-[#0A0A0A] mb-2">{product.name}</h3>
                <p className="text-sm text-[#404040] mb-4 flex-grow">{product.description || product.specs}</p>

                {product.price && (
                    <p className="text-[#E3B300] font-bold mb-4">${product.price}</p>
                )}

                <div className="mt-auto space-y-2">
                    <div className="flex gap-2">
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-2/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                        >
                            <option value="Standard">Size: Standard</option>
                            <option value="Large">Size: Large</option>
                            {/* Add more dynamic sizes if needed */}
                        </select>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            className="border border-[#E0DCD4] rounded-[2px] px-2 py-1 text-sm w-1/3 text-[#0A0A0A] bg-white focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                        />
                    </div>
                    <button
                        onClick={handleAddToQuote}
                        className="btn-dark btn-block"
                    >
                        Add to Quote
                    </button>
                    <Link to={`/products/${product.id}`} className="block text-center text-sm text-gray-500 hover:text-[#E3B300] mt-2">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
