import React, { useState } from 'react';
import { X, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

// GOOGLE_FORM_URL: Replace this placeholder once the form is ready.
const GOOGLE_FORM_URL = 'https://forms.gle/PLACEHOLDER';

const OtpModal = ({ isOpen, onClose, cartItems }) => {
    const [step, setStep] = useState(1);
    const [contact, setContact] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (!contact.trim()) {
            setError('Please enter your phone number or email.');
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
        setContact('');
        setOtp('');
        setError('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-[6px] shadow-xl w-full max-w-md p-8 relative">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-[#404040] hover:text-[#0A0A0A]"
                >
                    <X size={22} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-[#E3B300] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                    <div className={`flex-1 h-1 rounded ${step >= 2 ? 'bg-[#E3B300]' : 'bg-gray-200'}`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-[#E3B300] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                </div>

                {step === 1 ? (
                    <>
                        <h2 className="text-xl font-bold text-[#0A0A0A] mb-2">Verify Your Contact</h2>
                        <p className="text-sm text-[#404040] mb-6">Receive a one-time password to confirm your quote request.</p>
                        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                        <form onSubmit={handleSendOtp} className="space-y-4">
                            <input
                                type="text"
                                value={contact}
                                onChange={e => setContact(e.target.value)}
                                placeholder="Phone or Email"
                                className="w-full px-4 py-2 border border-[#E0DCD4] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#E3B300]"
                                required
                            />
                            <button type="submit" disabled={loading} className="btn-primary btn-block flex items-center justify-center gap-2">
                                {loading ? 'Sending...' : (<>Send OTP <ArrowRight size={16} /></>)}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold text-[#0A0A0A] mb-2">Enter OTP</h2>
                        <p className="text-sm text-[#404040] mb-6">Enter the 6-digit OTP sent to {contact}</p>
                        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <input
                                type="text"
                                maxLength={6}
                                value={otp}
                                onChange={e => setOtp(e.target.value)}
                                className="w-full px-4 py-2 text-center text-2xl tracking-[0.5em] border border-[#E0DCD4] rounded-[4px]"
                                required
                            />
                            <button type="submit" disabled={loading} className="btn-primary btn-block">
                                {loading ? 'Verifying...' : 'Confirm & Submit'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default OtpModal;
