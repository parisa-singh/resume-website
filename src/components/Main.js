import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from '../components/AllSvgs'; 
import Intro from './Intro';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative; 

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif ;
  font-weight: 500; 
}
`

const Container = styled.div`
  padding: 2rem;
  display: flex; 
  align-items: center; 
`

const ABOUT = styled (NavLink)`
color: ${props => props.theme.text};
position: absolute; 
top: 10%; 
right: calc(1rem + 2vw); 
transform: translate(-50%, -50%);
test-decoration: none; 
z-index: 1;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%; 
  right: calc(0.5rem + 2vw); 
  text-decoration: none;
  z-index: 1;
  transform: rotate(90deg); 
`

const BottomBar = styled.div`
position: absolute; 
bottom: 1rem; 
left: 0; 
right: 0; 
width: 100%; 

display: flex; 
justify-content: space-evenly; 
`

const WORK = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text}; 
  text-decoration: none;
  z-index: 1;
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text}; 
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
position: absolute; 
top: ${props => props.click ? '85%' : '50%'  }; 
left: ${props => props.click ? '92%' : '50%'  }; 
transform: translate(-50%,-50%);
border: none; 
outline: none;
background-color: transparent; 
cursor: pointer; 

display:flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
transition: all 1s ease; 

z-index:2;

& > svg {
  animation: ${rotate} infinite 1.5s linear; 
}

& > span {
  display: ${props => (props.click ? 'none' : 'inline-block')};
  padding-top: 1rem; 
}
`

const DarkDiv = styled.div`
position: absolute; 
top: 0; 
background-color: #000; 
bottom: 0; 
right: 50%;
width: ${props => props.click ? '50%' : '0%'}; 
height: ${props => props.click ? '100%' : '0%'}; 
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;  
`


const Main = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <MainContainer>
        <DarkDiv click={click} />
        <Container>
        <PowerButton /> 
        <LogoComponent theme = {click ? 'dark' : 'light'}/>
        <SocialIcons theme = {click ? 'dark' : 'light'} />
        
        <Center click={click}> 
          <YinYang onClick={handleClick} width={click ? 120 : 250} height={click ? 120 : 250} fill='currentColor' />
          <span><h2>Click Here!</h2></span>
        </Center>

        <ABOUT to="/about"> 
          <motion.h2
          initial={{
            y: -200,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          animate={{
            y: 0,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}
          >
            About Me 
          </motion.h2>
        </ABOUT>


        <BLOG to="/blog" click={click}> 
          <motion.h2
          initial={{
            y: -200,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          animate={{
            y: 0,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}
          >
            Blogs 
          </motion.h2>
        </BLOG>


        <BottomBar>
        <WORK to="/work" click={click}> 
          <motion.h2
          initial={{
            y: 200,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          animate={{
            y: 0,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}
          >
            Projects 
          </motion.h2>

        </WORK>
        <SKILLS to="/skills"> 
          <motion.h2
          initial={{
            y: 200,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          animate={{
            y: 0,
            transition: {type:'spring', duration: 1, delay: 0.5}
          }}
          whileHover = {{scale: 1.1}}
          whileTap = {{scale: 0.9}}
          >
            My Skills 
          </motion.h2>
        </SKILLS>
        </BottomBar> 
        </Container>
        {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main
