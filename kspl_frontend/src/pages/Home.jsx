import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import OffersSection from '../components/OffersSection';
import CategoryCircles from '../components/CategoryCircles';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <OffersSection />
            <CategoryCircles />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
