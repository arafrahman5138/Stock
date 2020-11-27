import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'


export default function Summary2() {
    return (
        <>
        <div>
            <div> 
                <ModuleNavHeader title='Page 6' prevLink='/module-1' nextLink='/module-3'/>
                <p className='content'><br/>
                Summary:
                <br/>
                <br/>
                <br/><br/>
                <br /> 
                <br/>
                <br />
                </p>
            </div>
            <ModuleNavFooter currentPageNum='6' totalPageNum='6' nextLink='/Quiz2' prevLink='/2page-5'/>
        </div>
        </>
    )
}