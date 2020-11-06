import React from 'react'
import '../../App.css'
import Cards from './module-components/Cards'
import Footer from '../home/home-components/Footer'
import ChartSample from './module-components/ChartSample'

export default function Modules() {
    return (
        <>
            <Cards />
            <Footer />
            <ChartSample/>
        </>
    )
}