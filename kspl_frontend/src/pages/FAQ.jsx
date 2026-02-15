import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            q: "Do you supply to international locations?",
            a: "Yes, we have logistics partners capable of shipping to most major industrial hubs globally. Quote terms will include shipping details."
        },
        {
            q: "What certifications do your products hold?",
            a: "Our products typically come with MTC (Material Test Certificates) according to EN 10204 3.1. Specific certifications like IBR (Indian Boiler Regulations) are available upon request."
        },
        {
            q: "How do I request a quote?",
            a: "You can add items to your quote basket from the product pages or simply contact us directly via the contact form with your Bill of Materials (BOM)."
        },
        {
            q: "Is there a minimum order quantity (MOQ)?",
            a: "For stock items, we have low MOQs. For custom-fabricated items, MOQs may apply depending on the complexity and material."
        }
    ];

    return (
        <div className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold text-[color:var(--color-primary)] mb-10 text-center">Frequently Asked Questions</h1>

            <div className="space-y-6">
                {faqs.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[4px] shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.q}</h3>
                        <p className="text-gray-600">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
