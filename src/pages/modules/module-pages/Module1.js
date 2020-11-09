import React from 'react'
import '../../../App.css'
import ModuleNavFooter from '../module-components/ModuleNavFooter'
import ModuleNavHeader from '../module-components/ModuleNavHeader'
import './Module.css'
import Mod1Page1 from './Mod1Page1'
import {PrevPageButton} from '../module-components/PrevPageButton'
import {NextPageButton} from '../module-components/NextPageButton'


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
                <p className='content'> What is a stock? <br/><br/>

                A stock is a piece of a business. It is not a physical piece, like a brick or glass, but a part of a company's ownership.
                <br/><br/>
                {/* <img src="images/img-1.jpg" alt="" className="stock"/>  */}
                Say for example Anya buys 12 dogs. She is the sole owner of these dogs. She comes to you and asks if you would like to buy a dog from her, she needs the funds to help sustain her other dogs.
                You decide to buy a dog from her and you now become a shareholder of her greater objective.
                </p>
            </div>
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
                <ModuleNavFooter currentPageNum='1' totalPageNum='2' nextLink='/page-1' prevLink='/module-1'/>
            </div>
        </div>
        </>
    )
}
// }

// export default Module1;
