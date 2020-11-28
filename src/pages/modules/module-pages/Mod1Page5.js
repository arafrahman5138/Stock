import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'


export default function Mod1Page5() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 6' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'><br/>
                Bubble Sort. <br/>
                <iframe width="420" height="315" className="youtube"
                    src="https://www.youtube.com/watch?v=xli_FI7CuzA"></iframe><br/><br/>
                <br /> A lot of the times in real life applications, we have a bunch of data that needs to be put in order. When you shop for something online and you click “price, smallest to highest” we need to sort all items in such a way that the cheapest thing will be viewed first, and the most expensive one last.
                <br/>
                <br />There are a lot of ways to do this, and a more famous one is Bubble Sort. Bubble Sort first looks at how many items there are, and knows that, at worst, it will need to look through the list as many times as there are items minus 1. So if I have 20 things on my website that I need to sort to show my customer, I will have to iterate through them 19 times at worst, and 1 time at best. Best being they already happened to have been sorted the way my customer wants them.
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='6' totalPageNum='8' nextLink='/page-6' prevLink='/page-4'/>
        </div>
        </>
    )
}