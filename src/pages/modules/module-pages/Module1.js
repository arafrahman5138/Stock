import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import './Module.css'

export default function Module1() {
    return (
        <>
        <div>
            <h1 className='title'>Module 1</h1>
            <div> 
                <p className='content'> What is a stock? <br/><br/>

                A stock is a piece of a business. It is not a physical piece, like a brick or glass, but a part of a company's ownership.
                <br/><br/>
                {/* <img src="images/img-1.jpg" alt="" className="stock"/>  */}
                Say for example Anya buys 12 dogs. She is the sole owner of these dogs. She comes to you and asks if you would like to buy a dog from her, she needs the funds to help sustain her other dogs.
                You decide to buy a dog from her and you now become a shareholder of her greater objective.
                </p>
            </div>
            <ModuleNavFooter />
        </div>
        </>
    )
}
