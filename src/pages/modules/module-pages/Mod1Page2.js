import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'

export default function Mod1Page2() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 3' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'>
                <img src="images/PrimAlgDemo.gif" className="embed-image" alt="gif" width="200" height="300" />
                <br />Note that you can traverse any edge to any node no matter which one was last visited by the algorithm. You are not restricted to the immediate neighbors of a node, you are restricted to all neighbors of all nodes visited so far.
                <br/>
                <br />Prim's is useful when you are not given information ahead of time, and is useful when you need to visit every single possible node, rather than just getting from one node to another. Keep in mind when we make our immediate first decision between taking the road that is 2 miles, or taking the road that is 1 mile to reach a checkpoint, we are completely unaware of how many checkpoints there are, and the distances between them.
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='3' totalPageNum='3' nextLink='/page-2' prevLink='/page-1'/>
        </div>
        </>
    )
}
