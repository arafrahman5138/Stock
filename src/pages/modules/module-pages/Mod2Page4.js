import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Mod2Page4() {
    return (
        <>
        <div className='body'>
            <ModuleNavHeader title='Page 4' prevLink='/module-1' nextLink='/module-3'/>
            <div> 
                <p className='content'>There are different approaches to accomplishing this. Generally speaking, there are 3 types of learning, and each branches out to its own subcategory.
                <br/>
                <br/>-Categories:
                <br/>Supervised Learning
                <br/>Unsupervised Learning
                <br/>Reinforcement Learning <br/>
                <br/>In supervised learning, the machine attempts to follow given examples, and uses the data from said examples to get better at following examples. The examples are clear and easy to understand. For example, analyzing the rise and fall of a stock and using that to trade stocks. Generally speaking, a stock going up is a good thing to invest in, and a stock declining is not.
                <br/><br/> In unsupervised learning, the machine uncovers data patterns that are not explicitly said to be searched for. For example, predicting the weather.
                <br/><br/> In reinforcement learning, the machine has a goal it needs to work for, and a set of algorithms (tools) to get there. The machines try to achieve the goal the best they can in the least amount of steps, and, unlike supervised learning, set their own examples typically. For example, a self-driving car parking itself. The cars eventually learn what the best ways to park themselves are, and begin to follow those examples.
                </p>
            </div>
            <div className='footer'>
            <ModuleNavFooter currentPageNum='4' totalPageNum='6' nextLink='/2page-5' prevLink='/2page-3'/>
            </div>
        </div>
        </>
    )
}
