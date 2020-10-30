// Uncomment all of the commented code and follow the instructions on the StyledButton.js file if you want to see styled buttons

import React from 'react';
import { Link } from 'react-router-dom';
import '../../home/home-components/Button.css';
// import * as Styled from './StyledButton'

const STYLES = ['btn--primary', 'btn-outline'];

const SIZES = ['btn--medium', 'btn-large'];

export const PrevPageButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to ='/module-1' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};

// export const PrevPageButton = ({ children, onClick, type, title, value }) => {
//   return (
//     <Link to ='/module-1' className='btn-mobile'>
//         <Styled.Button onClick={onClick} 
//             type={type} 
//             value={value}> 
//         <span>{title}</span>
//             {children}
//         </Styled.Button>
//     </Link>
//   )
// };
