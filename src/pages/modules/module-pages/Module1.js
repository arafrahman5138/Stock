import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import Populate from "../module-components/Populate";
import './Module.css'

export default function Module1() {
    return (
        <>
        <div>
            <h1 className='title'>Module 1</h1>
            <div> 
                <p className='content' id = "curriculum"> What is a stock? <br/><br/>

                A stock is a piece of a business. It is not a physical piece, like a brick or glass, but a part of a company's ownership.
                <br/><br/>
                {/* <img src="images/img-1.jpg" alt="" className="stock"/>  */}
                Say for example Anya buys 12 dogs. She is the sole owner of these dogs. She comes to you and asks if you would like to buy a dog from her, she needs the funds to help sustain her other dogs.
                You decide to buy a dog from her and you now become a shareholder of her greater objective.
                </p>
                <p className='content'>-What is an Algorithm?<br/>
                https://www.youtube.com/watch?v=R9OHn5ZF4Uo <br/>

                A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.
                </p>
            </div>
            <Populate />
            <ModuleNavFooter />
        </div>
        </>
    )
}
