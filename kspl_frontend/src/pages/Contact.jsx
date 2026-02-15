import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-10 text-center">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-[4px] shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)]"></textarea>
                        </div>
                        <button type="button" className="w-full bg-[color:var(--color-primary)] text-white py-2 rounded-[4px] font-medium hover:opacity-90 transition-opacity">
                            SendMessage
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                        <p className="text-gray-600 mb-8">
                            Our dedicated team is ready to assist you with your industrial requirements.
                            Reach out to us for quotes, technical support, or partnership inquiries.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-50 p-3 rounded-full text-[color:var(--color-primary)] mr-4">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Head Office</h3>
                                <p className="text-gray-600">123 Industrial Estate, Phase 2<br />Peenya, Bangalore - 560058</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-50 p-3 rounded-full text-[color:var(--color-primary)] mr-4">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Phone</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                                <p className="text-gray-600">+91 80 1234 5678</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-blue-50 p-3 rounded-full text-[color:var(--color-primary)] mr-4">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">sales@kspl-industrial.com</p>
                                <p className="text-gray-600">support@kspl-industrial.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
