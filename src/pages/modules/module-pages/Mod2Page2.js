import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Mod2Page2() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Page 2' prevLink='/module-1' nextLink='/module-3'/>
            <div> 
                <p className='content'>
                <br/>The thought process is, if we have tools that are capable of doing so much for us when we use them, can we make them use themselves? If I am trying to dig a hole with a shovel, can I invent some kind of tool that will dig for me without my input? Can I make a tool that will dig on its own that does it better than I would with a shovel?
                <br/>
                <br/>In computers, this is called “Machine Learning,” the study of science that gives computers the ability to learn without being explicitly programmed what to do. The way machine learning works involves a lot of math, theory, and skills some people might study in college, but here is a definition of it by computer scientist Tom Mitchell in 1997.
                <br/>
                <br/>“A computer is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at task T, as measured by P, improves with experience E.”
                </p>
            </div>
            <div className='footer'>
            <ModuleNavFooter currentPageNum='2' totalPageNum='6' nextLink='/2page-3' prevLink='/module-2'/>
            </div>
        </div>
        </>
    )
}
