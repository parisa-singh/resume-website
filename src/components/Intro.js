import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 40vh;
  display: flex;
  align-items: flex-end; 
  justify-content: center; 


  background: linear-gradient(
      to right, 
      ${props => props.theme.body} 50%, 
      ${props => props.theme.text} 50%) bottom, 
      linear-gradient(
      to right, 
      ${props => props.theme.body} 50%, 
      ${props => props.theme.text} 50%) top;
        background-repeat: no-repeat; 
        background-size: 100% 2px;

  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index: 1;
`

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const SubBox = styled.div`
width: 50%; 
position: relative;
display: flex;
justify-content: center; 
align-items: center;    

.pic{
    position: absolute; 
    bottom: 0%; 
    left: 50%; 
    transform: translate(-50%,0%);
    width: 100%; 
    height: auto;    
}
`
const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h1 {
    font-size: 2rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  h6 {
    font-size: 1rem;
    margin: 0;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;


const Image = styled.img`
  position: absolute;
  bottom: 0; 
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
`;

const Intro = () => {
  return (
    <Wrapper>
      <Box
      initial = {{height:0}}
      animate = {{height: '55vh'}}
      transition = {{type: 'spring', duration:2, delay:1}}
      >
        <SubBox>
            <Text>
                <h2>Hi there!</h2>
                <h1> My name is Parisa Singh.</h1>
                <h6> I am a computer science student passionate about 
                    ML, UI/UX and AI.</h6>
                <h6> I aim to leverage technology to solve real-world challenges. </h6>
            </Text>
        </SubBox>
        <SubBox>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Image className="pic" src={Me} alt="Profile Picture" />
          </motion.div>
        </SubBox>
      </Box>
    </Wrapper>
  );
}

export default Intro;
