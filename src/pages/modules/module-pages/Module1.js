import React, {Component} from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import Populate from "../module-components/Populate";
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'
import Mod1Page1 from './Mod1Page1'
import {PrevPageButton} from '../module-components/PrevPageButton'
import {NextPageButton} from '../module-components/NextPageButton'


class Module1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };

        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    handlePreviousPage() {
        this.setState({
            page: this.state.page - 1
        });
    }

    handleNextPage() {
        this.setState({
            page: this.state.page + 1
        });
    }

    render() {
        return (
            <>
            <div className='body'>
                <ModuleNavHeader title='Module 1' prevLink='/module-1' nextLink='/module-2'/>
                <div> 
                    {/* <iframe width="420" height="315" className="youtube"
                        src="https://www.youtube.com/embed/R9OHn5ZF4Uo">
                    </iframe>
                        <p className='content' id="curriculum"> Some algorithms humans can understand: <br/><br/>

                    Prim's Algorithm
                    <br/><br/>
                    <img src="images/img-1.jpg" alt="" className="stock"/> 
                    This algorithm finds the shortest path from "nodes" in a "graph." 
                    What this basically means, is that a node is something of interest, 
                    the graph is the collection of those somethings, and the distance between them, 
                    the distance typically being called edges. An example might be checkpoints 
                    in a race. If the goal of the race is to touch all of the checkpoints, 
                    not necessarily in one order, but in any order, you might want to find 
                    out what the shortest amount of time it takes to go from each checkpoint is.
                    </p>
                    <br /> */}
                </div>
                {/* <Populate /> */}
                {/* <ModuleNavFooter /> */}
                <div className='footer'>
                    <ModuleNavFooter 
                        page={this.state.page} 
                        handlePreviousPage={this.handlePreviousPage} 
                        handleNextPage={this.handleNextPage} 
                        totalPage='2'/>
                    {/* <ModuleNavFooter currentPageNum='1' totalPageNum='2' nextLink='/page-1' prevLink='/module-1'/> */}
                </div>
            </div>
            </>
        )
    }
};

export default Module1;
