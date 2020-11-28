import React, {Component} from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import Populate from "../module-components/Populate";
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'
import Mod1Page1 from './Mod1Page1'
import { PrevPageButton } from '../../module-components/PrevPageButton'
import { NextPageButton } from '../../module-components/NextPageButton'


// class Module1 extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { times: 1 };
//       this.handleClick = this.handleClick.bind(this);
//       this.hC = this.hC.bind(this);
//     }
//     handleClick() {
//       this.setState({ times: this.state.times + 1 });
//     }
//     hC() {
//         this.setState({ times: this.state.times - 1 });
//     }
//     render() {
    export default function Module1() {
        return (
            <>
            <div className='body'>
                <ModuleNavHeader title='Module 1' prevLink='/module-1' nextLink='/module-2'/>
                <div> 
                    <iframe width="420" height="315" className="youtube"
                        src="https://www.youtube.com/embed/R9OHn5ZF4Uo">
                    </iframe>
                        <p className='content' id="curriculum"> Some algorithms humans can understand: <br/><br/>
    
                    Prim's Algorithm
                    <br/><br/>
                    {/* <img src="images/img-1.jpg" alt="" className="stock"/>  */}
                    This algorithm finds the shortest path from "nodes" in a "graph." 
                    What this basically means, is that a node is something of interest, 
                    the graph is the collection of those somethings, and the distance between them, 
                    the distance typically being called edges. An example might be checkpoints 
                    in a race. If the goal of the race is to touch all of the checkpoints, 
                    not necessarily in one order, but in any order, you might want to find 
                    out what the shortest amount of time it takes to go from each checkpoint is.
                    </p>
                    <br />
                </div>
                {/* <Populate /> */}
                {/* <ModuleNavFooter /> */}
                <div className='footer'>
                    {/* <div>
                        <div className='section-container'>
                            <div className='item-container'>
                                <div className='buttons'> 
                                    // <PrevPageButton title='Previous Page' link={props.prevLink}/>
                                    <PrevPageButton link='/module-1' onClick={this.hC}>Previous Page</PrevPageButton>
                                </div>
                                <div className='page-num'>
                                    <p>Page {this.state.times}/2</p>
                                </div>
                                <div className='buttons'> 
                                    // <NextPageButton title='Next Page' link={props.nextLink}/>
                                    <NextPageButton link={`/module-1/page/${this.state.times}`} onClick={this.handleClick}>Next Page</NextPageButton>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <ModuleNavFooter currentPageNum='1' totalPageNum='8' nextLink='/page-1' prevLink='/module-1'/>
                </div>
            </div>
            </>
        )
    }
    // }
    
    // export default Module1;