import React from "react";
import './module-nav-footer.css'
import { NextPageButton } from './next-page-button'
import { PrevPageButton } from './prev-page-button'

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