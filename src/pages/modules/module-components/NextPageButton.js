import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './StyledButton'

export const NextPageButton = ({ children, onClick, type, title, value }) => {
  return (
    <Link to ='/page-1' className='btn-mobile'>
        <Styled.Button onClick={onClick} 
            type={type} 
            value={value}> 
        <span>{title}</span>
            {children}
        </Styled.Button>
    </Link>
  )
};