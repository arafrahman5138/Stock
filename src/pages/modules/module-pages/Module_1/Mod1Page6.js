import React from 'react'
import '../../../../App.css'
import ModuleNavFooter from '../../module-components/ModuleNavFooter'
import ModuleNavHeader from '../../module-components/ModuleNavHeader'
import '../Module.css'


export default function Mod1Page6() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 7' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'><br/>
                First, Bubble Sort makes a comparison. Is the item I am looking at cheaper or more expensive than the next item? If we are doing least expensive to most expensive, we want the least expensive items shown first. So, if item 1 is cheaper than item 2, do nothing. Otherwise, swap them. Now, the item that was in 2nd place is going to be shown in first place, and the first place item from before is now the “2nd item.” So now we look at item 2 and item 3. Item 2 could either be the same one before, or we could have swapped places with the first and second item before, and now our item 2 was originally item 1. Repeat this process, is item 2 cheaper than item 3? If not, swap them, but if it is, do nothing.
                <br/>Here is a visualization of this.
                <br/>
                <img src="images/bubble-sort-visualization.gif" className="embed-image" alt="gif" width="300" height="300" /><br/><br/>
                <br /> It is important to know how many items are in the list so it knows when to stop sorting. If it did not know that, it would constantly be comparing items in a list that are already sorted, but it would not know that its job is done and would repeat the process infinitely. In the above graphic, it knows it only needs to go through it 4 times at worst, but it actually only has to go through the list 3 times. The job is done once it iterates through the list and does not make any swaps.
                <br/>
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='7' totalPageNum='8' nextLink='/page-7' prevLink='/page-5'/>
        </div>
        </>
    )
}