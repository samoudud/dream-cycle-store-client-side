import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;