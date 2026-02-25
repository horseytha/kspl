import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { api } from '../services/api';
import { ArrowLeft, Save, Upload, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        categoryId: '',
        material: 'Steel',
    });
    const [categories, setCategories] = useState<any[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await api.categories.getAll();
                setCategories(res);
                if (res.length > 0) {
                    setFormData(prev => ({ ...prev, categoryId: res[0].id.toString() }));
                }
            } catch (err) {
                console.error('Failed to fetch categories:', err);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.categoryId) {
            setError('Please select a category');
            return;
        }

        if (formData.description.length < 10) {
            setError('Description must be at least 10 characters long');
            return;
        }

        setLoading(true);
        setError('');

        const data = new FormData();
        data.append('data', JSON.stringify({
            name: formData.name,
            description: formData.description,
            price: formData.price ? parseFloat(formData.price) : undefined,
            categoryId: parseInt(formData.categoryId),
            material: formData.material
        }));
        if (image) data.append('image', image);

        try {
            await api.products.create(data);
            navigate('/products');
        } catch (err: any) {
            console.error('Create product error:', err);
            const msg = err.response?.data?.message || err.message || 'Failed to add product';
            setError(typeof msg === 'string' ? msg : JSON.stringify(msg));
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="flex items-center gap-4 mb-10">
                <Link to="/products" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-3xl font-extrabold text-white mb-1">New Specification</h2>
                    <p className="text-slate-400">Add a new industrial boiler or component to the catalog</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-brand-card border border-slate-800 p-8 rounded-3xl space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Product Identity</label>
                            <input
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. High-Pressure Steam Boiler"
                                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-accent transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Technical Description (Min 10 chars)</label>
                            <textarea
                                name="description"
                                required
                                rows={6}
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Provide detailed technical specifications (e.g. pressure range, fuel type, capacity)..."
                                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-accent transition-all resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Category</label>
                                <select
                                    name="categoryId"
                                    required
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-accent transition-all appearance-none"
                                >
                                    <option value="" disabled>Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Dominant Material</label>
                                <select
                                    name="material"
                                    value={formData.material}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-accent transition-all appearance-none"
                                >
                                    <option value="Steel">Industrial Steel</option>
                                    <option value="Copper">Copper Alloy</option>
                                    <option value="PVC">Reinforced PVC</option>
                                    <option value="Brass">Precision Brass</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Price Component (USD)</label>
                            <input
                                name="price"
                                type="number"
                                step="0.01"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-accent transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-brand-card border border-slate-800 p-8 rounded-3xl text-center">
                        <h3 className="text-sm font-semibold text-slate-300 text-left mb-4 ml-1">Product Visualization</h3>

                        <div className="relative group aspect-square rounded-2xl border-2 border-dashed border-slate-800 hover:border-brand-accent transition-all overflow-hidden flex flex-col items-center justify-center bg-slate-900/50">
                            {preview ? (
                                <>
                                    <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                                    <button
                                        type="button"
                                        onClick={() => { setPreview(null); setImage(null); }}
                                        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </>
                            ) : (
                                <label className="cursor-pointer flex flex-col items-center gap-4 p-8">
                                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-all">
                                        <Upload size={32} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-white uppercase tracking-wider">Upload Schematic</p>
                                        <p className="text-xs text-slate-500">PNG, JPG or WEBP (Max 5MB)</p>
                                    </div>
                                    <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
                                </label>
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-accent hover:bg-blue-600 text-white font-black py-5 rounded-3xl flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 disabled:opacity-50 transition-all active:scale-[0.98]"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Save size={24} />}
                        PUBLISH SPECIFICATION
                    </button>

                    <p className="text-xs text-slate-500 text-center uppercase tracking-widest leading-relaxed">
                        By publishing, you confirm that these specifications meet the industrial standards for KSPL deployment.
                    </p>
                </div>
            </form>
        </DashboardLayout>
    );
};

export default AddProduct;
