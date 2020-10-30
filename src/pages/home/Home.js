import React from 'react';
import '../../App.css';
import Cards from '../modules/module-components/Cards';
import Footer from './home-components/Footer';
import HeroSection from './home-components/HeroSection';


function Home () {
    return (
        <>
            <HeroSection /> 
            <Cards />
            <Footer />
        </>
    )
}

export default Home;