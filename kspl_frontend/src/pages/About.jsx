import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold text-[#E3B300] mb-6">About KSPL Industrial Solutions</h1>
            <div className="space-y-4 text-[#0A0A0A]">
                <p className="mb-4 leading-relaxed">
                    Established in 2005, KSPL has grown to become a premier supplier of high-quality industrial boiler components, piping systems, and engineering materials. We serve a diverse range of industries including power generation, petrochemicals, pharmaceuticals, and textile manufacturing.
                </p>
                <p className="mb-4 leading-relaxed">
                    Our mission is to provide reliable, high-grade materials that ensure the safety and efficiency of your industrial operations. We partner with top-tier manufacturers globally to bring you ISO-certified products that stand the test of time.
                </p>
                <h2 className="text-2xl font-semibold text-[#0A0A0A] mt-8 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#404040]">
                    <li><strong className="text-[#0A0A0A]">Quality First:</strong> We never compromise on material specifications or safety standards.</li>
                    <li><strong className="text-[#0A0A0A]">Customer Commitment:</strong> We build long-term relationships based on trust and transparent service.</li>
                    <li><strong className="text-[#0A0A0A]">Technical Expertise:</strong> Our team understands the engineering challenges you face and provides knowledgeable support.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
