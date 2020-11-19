import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'



export default function Mod1Page1() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 2' prevLink='/module-1' nextLink='/module-2'/>
                <p><img src="images/checkpoints.jpg"  alt="checkpoints" width="200" height="300" className="embed-image"/></p>
                <p className='content'>There is definitely some way that is fastest to figure out what to do here, but it might take some time for a person to figure it out. For Prim’s algorithm, though, it can figure it out in seconds.
                <br/>
                <br/>The way it works is it looks at each checkpoint we have visited, and then looks at all possible edges it can go to from any of the checkpoints we have already visited. Then, it will pick the edge that is the smallest.                
                <br/>
                <br/>So, in the picture above, the algorithm will touch all checkpoints in this order:
                <br/>
                <br/>Start → 1 mile → Checkpoint → 2 miles → Checkpoint → 4 miles → Checkpoint → 5 miles → Checkpoint → 10 miles → Checkpoint
                <br/>
                </p>
            </div>
            <ModuleNavFooter currentPageNum='2' totalPageNum='3' nextLink='/page-2' prevLink='/module-1'/>
        </div>
        </>
    )
}
