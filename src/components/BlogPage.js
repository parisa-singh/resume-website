import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/blog-background.png'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BlogComponent from './BlogComponent'
import {Blogs} from '../data/BlogData'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover; 
background-repeat: no-repeat; 
background-attachment: fixed; 
background-position: center; 
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`}; 
width: 100%; 
height: auto; 
position: relative; 
padding-bottom: 5rem;
`
const Center = styled.div`
display: flex; 
justify-content: center; 
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display:grid; 
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr)); 
grid-gap: calc(1rem + 2vw);
`
const container = {
  hidden: {opacity: 0},
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.5,
        duration: 1.5,
      }
    }
}

const BlogPage = () => {
  return (
    <MainContainer
    variants={container}
    initial = 'hidden'
    animate = 'show'
    exit = {{
        opacity:0, transition:{duration:0.5}
    }}
    >
        <Container>
            <LogoComponent />
            <PowerButton />
            <SocialIcons />
            
<Center>
<Grid>

{
    Blogs.map(blog => {
        return <BlogComponent key={blog.id} blog={blog}/>
    })
}

</Grid>
</Center>
<BigTitle
          text="BLOGS"
          top="11%"
          left="16%"
          color="grey"
          shadowColor="rgba(0, 0, 0, 0.43)"
          shadowOffsetX="4"
          shadowOffsetY="4"
          shadowBlur="12"
        />
        </Container>
    </MainContainer>
  )
}

export default BlogPage
