import React from 'react'
import '../../../../App.css'
import ModuleNavFooter from '../../module-components/ModuleNavFooter'
import ModuleNavHeader from '../../module-components/ModuleNavHeader'
import '../Module.css'


export default function Mod1Page4() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 5' prevLink='/module-1' nextLink='/module-2'/>
                <p className='content'><br/>
                That is a bit hard to conceptualize, so here is a graphic. <br/>
                <img src="images/djalg.gif" className="embed-image" alt="gif" width="300" height="300" /><br/><br/>
                <br /> You have probably seen real life applications for something like this, such as when you drive with the GPS. When driving with a GPS, the nodes are the turns you can take onto different roads, and the edges are the amount of time it takes to get from one turn to another.
                <br/>
                <br />When your GPS is using Djikstra’s algorithm, it deduces, “Hm I need to get from point A to point B. I could take the path that would have me go on 3 different roads, each of which takes about 5 minutes to travel, or I could take the path that has me take 1 road, and that only takes 8 minutes.” If we used Prim’s, we would approach this dilemma by taking the shortest immediate possible road, but then we may find out that we ended up taking longer to drive to where we were going than necessary. Both of these algorithms have their different applications.
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='5' totalPageNum='8' nextLink='/page-5' prevLink='/page-3'/>
        </div>
        </>
    )
}