import React from 'react'
import '../../../../App.css'
import ModuleNavFooter from '../../module-components/ModuleNavFooter'
import ModuleNavHeader from '../../module-components/ModuleNavHeader'
import '../Module.css'


export default function Mod1Page3() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 4' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'><br/>
                <iframe width="420" height="315" className="youtube"
                    src="https://www.youtube.com/embed/_lHSawdgXpI"></iframe><br/>
                <br /> Dijkstra's Algorithm. This algorithm works similarly, except it adds the distance between each node when comparing neighbors. Basically, upon visiting a node, you look at all edges it takes to get to all of its neighbors you have not visited. 
                <br/>
                <br />However, you also keep a running total while going through the graph of the distance you have traversed. If the distance to an unvisited node is shorter from a node you have already traversed then the one you most recently visited, then take that path. Basically, you are always summing up the length of each possible approach to traversing the graph, and you are always choosing the lowest sum.
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='4' totalPageNum='8' nextLink='/page-4' prevLink='/page-2'/>
        </div>
        </>
    )
}