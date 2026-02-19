import React from 'react';

const ButtonShowcase = () => {
    return (
        <div className="bg-[#F5F2EA] py-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-[#0A0A0A] mb-2">Button Showcase</h1>
                <p className="text-[#404040] mb-12">All button variations and sizes in the KSPL theme.</p>

                {/* ===== Button Variants ===== */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#E3B300] mb-6">Button Variants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Primary */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Primary Button</h3>
                            <div className="space-y-3">
                                <button className="btn-primary w-full">Default Primary</button>
                                <button className="btn-primary w-full hover:bg-[#C89A00]">Hover Primary</button>
                                <button className="btn-primary w-full opacity-50 cursor-not-allowed">Disabled Primary</button>
                            </div>
                        </div>

                        {/* Secondary */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Secondary Button</h3>
                            <div className="space-y-3">
                                <button className="btn-secondary w-full">Default Secondary</button>
                                <button className="btn-secondary w-full hover:bg-[#1a1a1a]">Hover Secondary</button>
                                <button className="btn-secondary w-full opacity-50 cursor-not-allowed">Disabled Secondary</button>
                            </div>
                        </div>

                        {/* Outline */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Outline Button</h3>
                            <div className="space-y-3">
                                <button className="btn-outline w-full">Default Outline</button>
                                <button className="btn-outline w-full hover:bg-[#404040] hover:text-white">Hover Outline</button>
                                <button className="btn-outline w-full opacity-50 cursor-not-allowed">Disabled Outline</button>
                            </div>
                        </div>

                        {/* Ghost */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Ghost Button</h3>
                            <div className="space-y-3">
                                <button className="btn-ghost w-full">Default Ghost</button>
                                <button className="btn-ghost w-full hover:bg-[#E3B300] hover:text-[#0A0A0A]">Hover Ghost</button>
                                <button className="btn-ghost w-full opacity-50 cursor-not-allowed">Disabled Ghost</button>
                            </div>
                        </div>

                        {/* Dark */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Dark Button</h3>
                            <div className="space-y-3">
                                <button className="btn-dark w-full">Default Dark</button>
                                <button className="btn-dark w-full hover:bg-[#404040]">Hover Dark</button>
                                <button className="btn-dark w-full opacity-50 cursor-not-allowed">Disabled Dark</button>
                            </div>
                        </div>

                        {/* Light */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Light Button</h3>
                            <div className="space-y-3">
                                <button className="btn-light w-full">Default Light</button>
                                <button className="btn-light w-full hover:bg-[#A88666]">Hover Light</button>
                                <button className="btn-light w-full opacity-50 cursor-not-allowed">Disabled Light</button>
                            </div>
                        </div>

                        {/* Success */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Success Button</h3>
                            <div className="space-y-3">
                                <button className="btn-success w-full">Default Success</button>
                                <button className="btn-success w-full hover:bg-[#45a049]">Hover Success</button>
                                <button className="btn-success w-full opacity-50 cursor-not-allowed">Disabled Success</button>
                            </div>
                        </div>

                        {/* Danger */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Danger Button</h3>
                            <div className="space-y-3">
                                <button className="btn-danger w-full">Default Danger</button>
                                <button className="btn-danger w-full hover:bg-[#da190b]">Hover Danger</button>
                                <button className="btn-danger w-full opacity-50 cursor-not-allowed">Disabled Danger</button>
                            </div>
                        </div>

                        {/* Link */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Link Button</h3>
                            <div className="space-y-3">
                                <button className="btn-link w-full">Default Link</button>
                                <button className="btn-link w-full hover:underline">Hover Link</button>
                                <button className="btn-link w-full opacity-50 cursor-not-allowed">Disabled Link</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Button Sizes ===== */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#E3B300] mb-6">Button Sizes</h2>
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0DCD4]">
                        <div className="space-y-4 max-w-md">
                            <button className="btn-primary btn-sm">Small Button (btn-sm)</button>
                            <button className="btn-primary">Default Button</button>
                            <button className="btn-primary btn-lg">Large Button (btn-lg)</button>
                            <button className="btn-primary btn-xl">Extra Large Button (btn-xl)</button>
                            <button className="btn-primary btn-block">Full Width Button (btn-block)</button>
                        </div>
                    </div>
                </section>

                {/* ===== Button Groups ===== */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#E3B300] mb-6">Button Groups</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Horizontal (btn-group)</h3>
                            <div className="btn-group">
                                <button className="btn-primary">Action 1</button>
                                <button className="btn-secondary">Action 2</button>
                                <button className="btn-outline">Action 3</button>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Vertical (btn-group-vertical)</h3>
                            <div className="btn-group-vertical max-w-xs">
                                <button className="btn-dark">Primary Action</button>
                                <button className="btn-ghost">Secondary Action</button>
                                <button className="btn-danger">Danger Action</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Real World Examples ===== */}
                <section>
                    <h2 className="text-2xl font-bold text-[#E3B300] mb-6">Real World Examples</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Product Card CTA */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Product Card</h3>
                            <div className="bg-[#F5F2EA] p-4 rounded mb-4">
                                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                                <h4 className="font-bold text-[#0A0A0A] mb-2">High Pressure Pipes</h4>
                                <p className="text-sm text-[#404040] mb-4">ASTM A106 Grade B</p>
                            </div>
                            <div className="space-y-2">
                                <button className="btn-primary btn-block">Add to Quote</button>
                                <button className="btn-outline btn-block">View Details</button>
                            </div>
                        </div>

                        {/* Hero Section CTA */}
                        <div className="bg-[#E3B300] p-6 rounded-lg text-[#0A0A0A]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Hero Section CTAs</h3>
                            <div className="space-y-4">
                                <p className="text-[#404040]">Premium industrial boiler systems & components</p>
                                <div className="space-y-2">
                                    <button className="btn-dark btn-block">Browse Products</button>
                                    <button className="btn-outline btn-block border-2 border-[#404040] text-[#404040] hover:bg-[#404040] hover:text-white">Request Quote</button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Buttons */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Modal Actions</h3>
                            <div className="bg-gray-100 p-4 rounded mb-4">
                                <h4 className="font-bold text-[#0A0A0A] mb-2">Confirm Action?</h4>
                                <p className="text-sm text-[#404040]">Are you sure you want to proceed?</p>
                            </div>
                            <div className="btn-group">
                                <button className="btn-danger flex-1">Delete</button>
                                <button className="btn-secondary flex-1 text-white">Cancel</button>
                            </div>
                        </div>

                        {/* Form Buttons */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E0DCD4]">
                            <h3 className="font-bold text-[#0A0A0A] mb-4">Form Controls</h3>
                            <div className="space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="Email address"
                                    className="w-full px-3 py-2 border border-[#E0DCD4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E3B300] text-[#0A0A0A]"
                                />
                                <div className="btn-group-vertical">
                                    <button className="btn-primary">Submit</button>
                                    <button className="btn-link text-center">Forgot password?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Color Reference ===== */}
                <section className="mt-16 pt-12 border-t border-[#E0DCD4]">
                    <h2 className="text-2xl font-bold text-[#E3B300] mb-6">Brand Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#E3B300]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Primary Yellow</p>
                                <p className="text-sm text-[#404040]">#E3B300</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#404040]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Primary Grey</p>
                                <p className="text-sm text-[#404040]">#404040</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#2a2a2a]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Dark Grey</p>
                                <p className="text-sm text-[#404040]">#2a2a2a</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#C0A080]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Dust Brown</p>
                                <p className="text-sm text-[#404040]">#C0A080</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#F5F2EA]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Off-White</p>
                                <p className="text-sm text-[#404040]">#F5F2EA</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#4CAF50]"></div>
                            <div className="p-4">
                                <p className="font-bold text-[#0A0A0A]">Success</p>
                                <p className="text-sm text-[#404040]">#4CAF50</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E0DCD4] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-24 bg-[#F44336]"></div>
                            <div className="p-4">
                                <p className="font-bold text-white">Danger</p>
                                <p className="text-sm text-[#404040]">#F44336</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ButtonShowcase;
