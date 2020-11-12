// Uncomment commented code on this file and the page button files if you want styled buttons

import React from "react";
import './ModuleNavFooter.css'
import { NextPageButton } from './NextPageButton'
import { PrevPageButton } from './PrevPageButton'

function ModuleNavFooter(props) {
    return (
        <> 
        <div>
            <div className='section-container'>
                <div className='item-container'>
                    
                    
                    {/* <div className='page-num'>
                        <p>Module 1/10</p>
                    </div> */}
                    {/* <div className='buttons'> 
                        
                        <NextPageButton>Take Quiz</NextPageButton>
                        
                        <PrevPageButton link={props.prevLink}>Previous Page</PrevPageButton>
                        <PrevPageButton title='Previous Page'>Previous Page <PrevPageButton/>
                    </div> */}
                        <PrevPageButton link={props.prevLink}>Previous Page</PrevPageButton>

                    <div className='page-num'>
                        <p>Page {props.currentPageNum}/{props.totalPageNum}</p>
                    </div>
                    <div className='buttons'> 
                        {/* <NextPageButton title='Next Page' link={props.nextLink}/> */}
                        <NextPageButton link={props.nextLink}>Next Page</NextPageButton>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuleNavFooter;