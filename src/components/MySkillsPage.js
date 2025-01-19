import React from 'react'
import styled,{ ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes'
import {Design, Develope} from './AllSvgs'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
background-color:  ${props => props.theme.body};
width: 100vw;
height: 100vh; 
position: relative;
display: flex; 
justify-content: space-evenly;
align-items: center
gap: 2rem; 
padding: 6rem 0;

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:  ${props => props.theme.text};
background-color:  ${props => props.theme.body};
padding: 2rem; 
width: 40vw;
height: 72vh; 
z-index: 3;
line-height: 1.5; 
cursor: pointer;

font-family: 'Ubuntu Mono', monospace; 
display: flex; 
flex-direction: column; 
justify-content: space-between;
overflow: auto;
box-sizing: border-box;

&:hover{
color: ${props => props.theme.body};
color: ${props => props.theme.text}; 
}
`
const Title=styled.h2`
display: flex; 
justify-content: center; 
align-items: center; 
font-size: calc(1em + 1vw); 
gap: 1rem;
`

const Description=styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw); 
padding: 0.5rem 0; 

strong{
    margin-bottom: 1rem; 
    text-transform: uppercase;
}

ul,p{
    margin-left: 2rem; 
}
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />
        <Main> 
          <Title> 
            <Design width={40} height={100} /> Hard Skills & Certifications
          </Title>
          <Description> 
          "Demonstrating technical expertise through proficiency in programming, design, 
          development tools, and certifications that reflect my commitment to continuous learning."
          </Description>
          <Description> 
          <br />
          <strong>Hard Skills</strong>
          <ul>
            <li>
            Programming Languages: Python, Java, JavaScript, TypeScript, HTML, CSS
            </li>
            <li>
            Design Tools: AutoCAD, Floor Plan Creator, SketchUp  
            </li>
            <li>
            Development Tools & Frameworks: React, Angular, Git, GUI, VS Code, HTML/CSS  
            </li>
            <li>
            Technologies: AWS Cloud, Raspberry Pi, Matplotlib, JSON, Tkinter  
            </li>
          </ul>
          <br />
          <strong>Certifications</strong>
          <ul>
            <li>
            Creativity and AI (Parsons School of Design)  
            </li>
            <li>
            CS50's Introduction to Programming with Python (Harvard)  
            </li>
            <li>
            HCI: Fundamentals & Design Principles (Georgia Tech)  
            </li>
          </ul>
          </Description>
        </Main>
        <Main> 
          <Title> 
            <Develope width={40} height={100} /> Soft Skills
          </Title>
          <Description> 
          "Demonstrating technical expertise through proficiency in programming, design, 
          development tools, and certifications that reflect my commitment to continuous learning."
          </Description>
          <Description> 
          <br />
          <strong>Soft Skills</strong>
          <ul>
            <li>
            Problem-solving and critical thinking  
            </li>
            <li>
            Creativity and innovation   
            </li>
            <li>
            Collaboration and teamwork    
            </li>
            <li>
            Communication (verbal and written)   
            </li>
            <li>
            Organizational and project management skills
            </li>
            <li>
            Adaptability and learning mindset    
            </li>
            <li>
            Attention to detail  
            </li>
          </ul>
          </Description>
        </Main>
        <BigTitle
          text="SKILLS"
          top ="0.5%"
          right="10%"
          color="grey"
          shadowColor="rgba(0, 0, 0, 0.43)"
          shadowOffsetX="4"
          shadowOffsetY="4"
          shadowBlur="12"
        />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
