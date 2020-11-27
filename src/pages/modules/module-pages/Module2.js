import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Module2() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Module 2' prevLink='/module-1' nextLink='/module-3'/>
            <div> 
                <p className='content'>-Computers in the stock market 
                <br/>
                <br/>So you might be able to think about why this is useful when making money. One of the best ways to make money is through the stock market. You probably have heard about how stocks are traded in your ECON class. 
                <br/>
                <br/>Well, many people have robots and computers trade the stocks for them. After all, if the computer knows that “hm… price going up is a good thing, time to buy,” it can do your work automatically and you can devote your time to learning about more stocks you want to look at. 
                <br/>
                <br/>The computer, given time, can even be better at trading than humans. If I showed you a list of Coca Cola stock from the past 100 years, could you memorize it all and tell me that same list if I gave you 10 seconds? Your computer certainly can.
                </p>
            </div>
            <div className='footer'>
            <ModuleNavFooter currentPageNum='1' totalPageNum='6' nextLink='/2page-2' prevLink='/module-2'/>
            </div>
        </div>
        </>
    )
}
