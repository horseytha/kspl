import React, { useState } from 'react';
import { X, Phone, ShieldCheck, ArrowRight, User, Mail, Building2, Hash } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/PLACEHOLDER';

const OtpModal = ({ isOpen, onClose, cartItems }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        gstNumber: '',
        phone: '',
    });
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            setError('Please enter a valid 10-digit phone number.');
            return;
        }
        setError('');
        setLoading(true);
        // Simulate OTP send
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 800);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError('Please enter the 6-digit OTP.');
            return;
        }
        setError('');
        setLoading(true);
        // Demo: accept any 6-digit OTP
        setTimeout(() => {
            setLoading(false);
            window.open(GOOGLE_FORM_URL, '_blank');
            onClose();
        }, 800);
    };

    const handleClose = () => {
        setStep(1);
        setFormData({ name: '', email: '', companyName: '', gstNumber: '', phone: '' });
        setOtp('');
        setError('');
        onClose();
    };

    const inputCls = "w-full px-4 py-2.5 border border-[#E0DCD4] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#E3B300] text-sm bg-white placeholder:text-gray-400";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-[6px] shadow-xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-[#404040] hover:text-[#0A0A0A]"
                >
                    <X size={22} />
                </button>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-[#E3B300] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                    <div className={`flex-1 h-1 rounded ${step >= 2 ? 'bg-[#E3B300]' : 'bg-gray-200'}`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-[#E3B300] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                </div>

                {step === 1 ? (
                    <>
                        <h2 className="text-xl font-bold text-[#0A0A0A] mb-1">Request a Quote</h2>
                        <p className="text-sm text-[#404040] mb-5">Fill in your details to proceed with the quote request.</p>
                        {error && <p className="text-red-500 text-sm mb-3 bg-red-50 p-2 rounded">{error}</p>}
                        <form onSubmit={handleSendOtp} className="space-y-3">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name *"
                                    className={`${inputCls} pl-10`}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address *"
                                    className={`${inputCls} pl-10`}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    name="companyName"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className={`${inputCls} pl-10`}
                                />
                            </div>
                            <div className="relative">
                                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    name="gstNumber"
                                    type="text"
                                    value={formData.gstNumber}
                                    onChange={handleChange}
                                    placeholder="GST Number"
                                    className={`${inputCls} pl-10`}
                                />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number (10 digits) *"
                                    maxLength={10}
                                    className={`${inputCls} pl-10`}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={loading} className="btn-primary btn-block flex items-center justify-center gap-2 mt-2">
                                {loading ? 'Sending OTP...' : (<>Send OTP <ArrowRight size={16} /></>)}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-[#0A0A0A] mb-2">Enter OTP</h2>
                        <p className="text-sm text-[#404040] mb-6">Enter the 6-digit OTP sent to <span className="font-semibold text-[#0A0A0A]">{formData.phone}</span></p>
                        {error && <p className="text-red-500 text-sm mb-3 bg-red-50 p-2 rounded">{error}</p>}
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <input
                                type="text"
                                maxLength={6}
                                value={otp}
                                onChange={e => setOtp(e.target.value)}
                                className="w-full px-4 py-3 text-center text-2xl tracking-[0.5em] border border-[#E0DCD4] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                                placeholder="• • • • • •"
                                required
                            />
                            <button type="submit" disabled={loading} className="btn-primary btn-block">
                                {loading ? 'Verifying...' : 'Confirm & Submit Quote'}
                            </button>
                            <button type="button" onClick={() => setStep(1)} className="w-full text-sm text-[#404040] hover:text-[#E3B300] transition-colors">
                                ← Back to details
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default OtpModal;
