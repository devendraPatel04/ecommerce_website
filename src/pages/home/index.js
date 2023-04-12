import React from 'react';
import './home.css';

import Header from '../../common/components/header';
import NavBar from '../../common/components/navbar-main';
import PopularOffers from './components/popular-offers';
import ImageSlider from './components/image-slider';
import Footer from '../../common/components/footer';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <NavBar />
            <ImageSlider />
            <PopularOffers />
            <Footer />
        </div>
    );
}

export default Home;