import React from 'react';
// import './page-nav-buttons.css';
import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn-outline'];

// const SIZES = ['btn--medium', 'btn-large'];

// export const PrevPageButton = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return(
//         <Link to ='/module-1' className='btn-mobile'>
//             <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}>
//                 {children}
//             </button>
//         </Link>
//     )
// };

import * as Styled from './styled-button'

export const PrevPageButton = ({ children, onClick, type, title, value }) => {
  return (
    <Link to ='/module-1' className='btn-mobile'>
        <Styled.Button onClick={onClick} 
            type={type} 
            value={value}> 
        <span>{title}</span>
            {children}
        </Styled.Button>
    </Link>
  )
};
