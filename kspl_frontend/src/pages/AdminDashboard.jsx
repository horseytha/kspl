import React, { useState } from 'react';
import { api } from '../services/api';

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        categoryId: '1',
    });
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('data', JSON.stringify({
            ...formData,
            price: formData.price ? parseFloat(formData.price) : undefined,
            categoryId: parseInt(formData.categoryId)
        }));
        if (image) data.append('image', image);

        try {
            await api.products.create(data);
            setMessage('Product added successfully!');
            setFormData({ name: '', description: '', price: '', categoryId: '1' });
            setImage(null);
        } catch (err) {
            setMessage('Error adding product: ' + err.message);
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#1a365d] mb-8">Admin Dashboard</h1>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Add New Product</h2>
                {message && <div className={`mb-6 p-4 rounded-md font-medium ${message.includes('Error') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>{message}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Product Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-[#1a365d] focus:border-[#1a365d]" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" className="w-full px-4 py-2 border rounded-md focus:ring-[#1a365d] focus:border-[#1a365d]" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Price ($)</label>
                            <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-[#1a365d] focus:border-[#1a365d]" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Category ID</label>
                            <input name="categoryId" type="number" value={formData.categoryId} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-[#1a365d] focus:border-[#1a365d]" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Product Image</label>
                        <input type="file" onChange={handleFileChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-[#1a365d] file:text-white hover:file:bg-[#2c5282] transition-all" />
                    </div>
                    <button type="submit" className="w-full bg-[#1a365d] text-white font-bold py-3 rounded-md hover:bg-[#2c5282] transition-colors shadow-md">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;
