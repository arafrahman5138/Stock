import React from "react";
import './module-footer.css'
import { NextPageButton } from './next-page-button'
import { PrevPageButton } from './prev-page-button'

function ModuleFooter() {
    return (
        <> 
        <div className='space'>
            <div className='footer'>
                <div className='prev-button'> 
                    <PrevPageButton buttonStyle='btn--outline'>Previous Page</PrevPageButton>
                </div>
                <div className='mid-footer'>
                    <p>Page 1/2</p>
                </div>
                <div className='next-button'> 
                    <NextPageButton buttonStyle='btn--outline'>Next Page</NextPageButton>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default ModuleFooter;