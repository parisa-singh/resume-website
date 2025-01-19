/*
import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: 'Pacifico', cursive;
`

const LogoComponent = () => {
  return (
    <Logo>
      CB
    </Logo>
  )
}

export default LogoComponent
*/

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { DarkTheme } from '../components/Themes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`;

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Poppins', sans-serif; 
  font-weight: bold;
  font-size: 2rem;

  position:fixed;
  left: 2rem;
  top: 2rem; 
  z-index: 3; 
`

const LogoComponent = (props) => {
  return (
    <>
      <GlobalStyle />
      <Logo color={props.theme}>
        Parisa Singh
      </Logo>
    </>
  );
};

export default LogoComponent

