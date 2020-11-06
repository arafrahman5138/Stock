import React from 'react';
import '../../App.css';
import ChartSample from '../modules/module-components/ChartSample';
import Cards from '../modules/module-components/Cards';
import Footer from './home-components/Footer';
import HeroSection from './home-components/HeroSection';


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