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
                        <PrevPageButton title='Previous Page'/>
                    </div>
                    <div className='page-num'>
                        <p>Page 1/2</p>
                    </div>
                    <div className='buttons'> 
                        <NextPageButton title='Next Page'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModuleNavFooter;