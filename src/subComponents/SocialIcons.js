import React from 'react'
import styled from 'styled-components'
import { LinkedIn, GitHub, YouTube, LinkTree, YinYang } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'
import { motion } from 'framer-motion'

const Icons = styled.div`
display: flex;
flex-direction: column; 
align-items: center; 

position: fixed; 
bottom: 0; 
left: 2rem; 

z-index: 3; 
gap: 15px; 

&>*not(:last-child){
    margin:0.5rem 0;
}
`


const Line = styled(motion.span)`
width: 3px; 
height: 9rem; 
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
    const iconColor = props.theme === 'dark' ? '#ffffff' : '#000000';
  return (
    <Icons>
          <div>
              <a href="https://www.linkedin.com/in/parisa-singh/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn width={40} height={40} fill={iconColor} />
              </a>
          </div>
          <div>
              <a href="https://github.com/parisa-singh" target="_blank" rel="noopener noreferrer">
                  <GitHub width={40} height={40} fill={iconColor} />
              </a>
          </div>
          <div>
              <a href="https://www.youtube.com/@parisasingh3876" target="_blank" rel="noopener noreferrer">
                  <YouTube width={40} height={40} fill={iconColor} />
              </a>
          </div>
          <div>
              <a href="https://linktr.ee/parisasingh77" target="_blank" rel="noopener noreferrer">
                  <LinkTree width={40} height={40} fill={iconColor} />
              </a>
          </div>
          <div>
              <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer" style={{ color: iconColor }}>
                  <YinYang width={0} height={0} fill='currentColor' />
              </a>
          </div>
            <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons
