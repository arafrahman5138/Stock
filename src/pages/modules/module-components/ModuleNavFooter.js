// Uncomment commented code on this file and the page button files if you want styled buttons

import React from "react";
import './ModuleNavFooter.css'
import { NextPageButton } from './NextPageButton'
import { PrevPageButton } from './PrevPageButton'

function ModuleNavFooter() {
    return (
        <> 
        <div className='space'>
            <div className='section-container'>
                <div className='item-container'>
                    <div className='buttons'> 
                        {/* <PrevPageButton title='Previous Page'/> */}
                        <PrevPageButton> Previous Module</PrevPageButton>
                    </div>
                    <div className='page-num'>
                        <p>Module 1/10</p>
                    </div>
                    <div className='buttons'> 
                        {/* <NextPageButton title='Next Page'/> */}
                        <NextPageButton>Take Quiz</NextPageButton>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuleNavFooter;