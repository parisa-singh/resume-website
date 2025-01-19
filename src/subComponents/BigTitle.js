import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  position: fixed;
  top: ${props => props.top}; 
  left: ${props => props.left}; 
  right: ${props => props.right}; 
  color: ${props => props.color || props.theme.text};
  font-size: 6rem;
  font-weight: bold;
  text-shadow: ${props => `${props.shadowOffsetX || 2}px ${props.shadowOffsetY || 2}px ${props.shadowBlur || 5}px ${props.shadowColor || 'rgba(0, 0, 0, 0.2)'} `};
`

const BigTitle = ({ text, top, left, right, color, shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur }) => {
    return (
      <Text
        top={top}
        left={left}
        right={right}
        color={color}
        shadowColor={shadowColor}
        shadowOffsetX={shadowOffsetX}
        shadowOffsetY={shadowOffsetY}
        shadowBlur={shadowBlur}
      >
        {text}
      </Text>
  )
}

export default BigTitle
