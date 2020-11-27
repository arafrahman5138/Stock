import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Mod2Page3() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Page 3' prevLink='/module-1' nextLink='/module-3'/>
            <div> 
                <p className='content'>Here is an example:
                <br/>
                <br/>Task T: Trading Coca Cola stock
                <br/>Performance P: Making money
                <br/>Experience E: A data set of stocks traded by the computer
                <br/>
                <br/>We want to analyze E, and, given what our T is, get P as often as possible. The human mind cannot really comprehend this easily, and while a computer cannot understand it conceptually, we can build a singular algorithm or set of algorithms that really excels at accomplishing this T. It may not know why it is so good at performing T with respect to P, but it is good at it nonetheless. That is good enough for us.
                <br/>
                </p>
            </div>
            <div className='footer'>
            <ModuleNavFooter currentPageNum='3' totalPageNum='6' nextLink='/2page-4' prevLink='/2page-2'/>
            </div>
        </div>
        </>
    )
}
