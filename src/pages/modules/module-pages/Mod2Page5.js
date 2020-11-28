import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Mod2Page5() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Page 5' prevLink='/module-1' nextLink='/module-3'/>
            <div> 
                <p className='content'>
                <br/>
                <br/>-Some ways to approach these types of learning
                 <br/>
                <br/>Decision Trees (easy to follow)
                <br/><br/> Artificial Neural Network (works similarly to a brain)
                <br/><br/> Support Vector Machine (works well with very specific examples. ie when X, why Y?)
                </p>
            </div>
            <div className='footer'>
            <ModuleNavFooter currentPageNum='5' totalPageNum='6' nextLink='/2page-6' prevLink='/2page-4'/>
            </div>
        </div>
        </>
    )
}
