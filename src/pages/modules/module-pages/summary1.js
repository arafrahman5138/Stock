import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'


export default function summary1() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 8' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'><br/>
                Summary:
                <br/>Computers are not able to understand anything more than what a human tells them. If a human tells them 4 is bigger than 3, the computer will know that, but will not know 3 is bigger than 2. So, in the world people have told computers just enough information to where they can start using them for automation.
                <br/>
                If my computer knows a number is bigger or less than another number, and it knows how to swap the place of two numbers in a list, it can sort them with Bubble sort. This saves a lot of time and money since human labor is expensive, but electricity is relatively cheap. A computer works year round, does not take vacation days, does not get tired, does not make mistakes (unless the human making it does), and costs far less than a human would demand for the same job.<br/><br/>
                <br /> There is virtually no reason to not use a computer. If the task was to dig a hole, a group of people could get together and scoop it out all by hand, or you could hire someone who owns a shovel and that single person alone would do a better, faster job, than all of those people working together. Computers work the same way. 1 computer scientist can do the work of dozens, maybe hundreds of people given enough time.
                <br/>
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='8' totalPageNum='8' nextLink='/Quiz1' prevLink='/page-6'/>
        </div>
        </>
    )
}