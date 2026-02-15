import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import OffersSection from '../components/OffersSection';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <OffersSection />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
