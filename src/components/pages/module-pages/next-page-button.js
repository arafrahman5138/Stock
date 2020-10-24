import React from 'react';
import './page-nav-buttons.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn-outline'];

const SIZES = ['btn--medium', 'btn-large'];

export const NextPageButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to ='/page-1' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
};