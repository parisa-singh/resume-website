import React from 'react'
import styled,{ ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes'
import { keyframes } from 'styled-components';


import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';

import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color:  ${props => props.theme.body};
width: 100vw;
height: 100vh; 
position: relative;
overflow: hidden; 
`
const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`

const Spaceman = styled.div`
position: absolute; 
top: 10%;
right: 5%; 
width: 20vw;
animation: ${float} 4s ease infinite; 


img {
  width: 100%; /* Ensure the image scales within the div */
  height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem; 
width: 50vw; 
height: 60vh;
z-index: 3; 
line-height: 1.5; 
display: flex;

justify-content: center; 
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute; 
left: calc(5rem + 5vw); 
top: 10rem; 

font-family: 'Ubuntu Mono', monospace; 
font-style: italics; 
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />
        
        <Spaceman>
          <img src={astronaut} alt="graphic" />
        </Spaceman>
        <Main>
        I am a technology enthusiast and designer passionate about software development, cybersecurity, UI/ UX, data science, and creative design. 
        <br/><br/>
        During my high school years, I have applied and learnt skills across various industries, including business solutions, public safety, and workspace optimization.
        <br/><br/>
        I love to learn through experience and I am actively looking for Spring 2025 internship opportunities.
        </Main>
        <BigTitle
          text="ABOUT"
          top="10%"
          left="15%"
          color="grey"
          shadowColor="rgba(255, 255, 255, 0.43)"
          shadowOffsetX="4"
          shadowOffsetY="4"
          shadowBlur="12"
        />
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
