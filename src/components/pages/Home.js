import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ChartSample from '../ChartSample';


function Home () {
    return (
        <>
            <HeroSection /> 
            <Cards />
            <ChartSample />
            <Footer />
        </>
    )
}

export default Home;