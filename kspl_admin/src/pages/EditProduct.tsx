import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { api } from '../services/api';
import { ArrowLeft, Save, Upload, X, Loader2 } from 'lucide-react';

const EditProduct = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        categoryId: '',
        material: 'Steel',
    });
    const [categories, setCategories] = useState<any[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productData, categoryData] = await Promise.all([
                    api.products.getById(Number(id)),
                    api.categories.getAll()
                ]);

                setCategories(categoryData);
                setFormData({
                    name: productData.name,
                    description: productData.description,
                    categoryId: productData.categoryId.toString(),
                    material: productData.material || 'Steel',
                });
                if (productData.imageUrl) {
                    setPreview(`http://localhost:5000${productData.imageUrl}`);
                }
            } catch (err: any) {
                console.error('Failed to fetch data:', err);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

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

        setSaving(true);
        setError('');

        const data = new FormData();
        data.append('data', JSON.stringify({
            name: formData.name,
            description: formData.description,
            categoryId: parseInt(formData.categoryId),
            material: formData.material
        }));
        if (image) data.append('image', image);

        try {
            await api.products.update(Number(id), data);
            navigate('/products');
        } catch (err: any) {
            console.error('Update product error:', err);
            const msg = err.response?.data?.message || err.message || 'Failed to update product';
            setError(typeof msg === 'string' ? msg : JSON.stringify(msg));
        } finally {
            setSaving(false);
        }
    };

    const inputCls = "w-full bg-brand-bg border border-brand-border rounded-[4px] py-3 px-4 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all placeholder:text-brand-text-muted text-sm";
    const labelCls = "block text-sm font-semibold text-brand-text mb-1.5";

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center min-h-[400px]">
                    <Loader2 className="animate-spin text-brand-accent" size={40} />
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="flex items-center gap-4 mb-8">
                <Link to="/products" className="p-2.5 bg-white text-brand-text-secondary hover:text-brand-text border border-brand-border rounded-[4px] transition-all hover:shadow-sm">
                    <ArrowLeft size={18} />
                </Link>
                <div>
                    <h2 className="text-2xl font-extrabold text-brand-text mb-0.5">Edit Product</h2>
                    <p className="text-brand-text-muted text-sm">Update industrial specifications for this component</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Main fields */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-brand-border rounded-[4px] p-6 shadow-sm space-y-5">
                        <div>
                            <label className={labelCls}>Product Name</label>
                            <input
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. High-Pressure Steam Boiler"
                                className={inputCls}
                            />
                        </div>

                        <div>
                            <label className={labelCls}>Description <span className="font-normal text-brand-text-muted">(min 10 chars)</span></label>
                            <textarea
                                name="description"
                                required
                                rows={5}
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Provide detailed technical specifications..."
                                className={`${inputCls} resize-none`}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>Category</label>
                                <select
                                    name="categoryId"
                                    required
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                    className={inputCls}
                                >
                                    <option value="" disabled>Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Material</label>
                                <select
                                    name="material"
                                    value={formData.material}
                                    onChange={handleChange}
                                    className={inputCls}
                                >
                                    <option value="Steel">Industrial Steel</option>
                                    <option value="Copper">Copper Alloy</option>
                                    <option value="PVC">Reinforced PVC</option>
                                    <option value="Brass">Precision Brass</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image + Submit */}
                <div className="space-y-5">
                    <div className="bg-white border border-brand-border rounded-[4px] p-5 shadow-sm">
                        <h3 className={labelCls}>Product Image</h3>
                        <div className="relative group aspect-square rounded-[4px] border-2 border-dashed border-brand-border hover:border-brand-accent transition-all overflow-hidden flex flex-col items-center justify-center bg-brand-bg">
                            {preview ? (
                                <>
                                    <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                                    <button
                                        type="button"
                                        onClick={() => { setPreview(null); setImage(null); }}
                                        className="absolute top-3 right-3 p-1.5 bg-red-500 text-white rounded-[4px] shadow hover:bg-red-600 transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </>
                            ) : (
                                <label className="cursor-pointer flex flex-col items-center gap-3 p-8 text-center">
                                    <div className="w-12 h-12 bg-white border border-brand-border rounded-[4px] flex items-center justify-center text-brand-text-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-all">
                                        <Upload size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-brand-text">Upload New Image</p>
                                        <p className="text-xs text-brand-text-muted">PNG, JPG or WEBP (Max 5MB)</p>
                                    </div>
                                    <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
                                </label>
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-[4px] text-red-600 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-brand-accent hover:bg-brand-accent-dark text-[#0A0A0A] font-bold py-4 rounded-[4px] flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 transition-all active:scale-[0.98]"
                    >
                        {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                        {saving ? 'Updating...' : 'Update Product'}
                    </button>
                </div>
            </form>
        </DashboardLayout>
    );
};

export default EditProduct;
