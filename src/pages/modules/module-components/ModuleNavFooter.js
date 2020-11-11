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
                    <div className='buttons'> 
<<<<<<< HEAD
                        {/* <PrevPageButton title='Previous Page'/> */}
                        <PrevPageButton> Previous Module</PrevPageButton>
                    </div>
                    <div className='page-num'>
                        <p>Module 1/10</p>
                    </div>
                    <div className='buttons'> 
                        {/* <NextPageButton title='Next Page'/> */}
                        <NextPageButton>Take Quiz</NextPageButton>
=======
                        {/* <PrevPageButton title='Previous Page' link={props.prevLink}/> */}
                        <PrevPageButton link={props.prevLink}>Previous Page</PrevPageButton>
                    </div>
                    <div className='page-num'>
                        <p>Page {props.currentPageNum}/{props.totalPageNum}</p>
                    </div>
                    <div className='buttons'> 
                        {/* <NextPageButton title='Next Page' link={props.nextLink}/> */}
                        <NextPageButton link={props.nextLink}>Next Page</NextPageButton>
>>>>>>> 3ea5509e7f1a1e3ed01d788a69ad52ea15b56f97
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuleNavFooter;