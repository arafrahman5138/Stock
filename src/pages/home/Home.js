import React from 'react';
import '../../App.css';
<<<<<<< HEAD:src/components/pages/Home.js
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ChartSample from '../ChartSample';
=======
import Cards from '../modules/module-components/Cards';
import Footer from './home-components/Footer';
import HeroSection from './home-components/HeroSection';
>>>>>>> main:src/pages/home/Home.js


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