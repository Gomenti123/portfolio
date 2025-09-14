import React from 'react'
import {motion} from 'motion/react'
import { Element } from 'react-scroll'


const About = () => {
  return (
    <Element name='about'>
 <motion.div initial={{opacity:0, y: 50}} transition={{duration:  1, repeat: 0}} whileInView={{opacity: 1, y: 0}}  className='w-[100%] md:w-[500px] flex flex-col gap-5'>
      <h1  className='w-[100%] font-semibold text-[30px]'>About</h1>
      <div className='flex flex-col gap-5'>
         <p>I like to craft solid and scalable products with exceptional user experiences, focusing on innovation and problem-solving across various industries.</p>
      <p>I'm Robinson Honour, a 19-year-old Nigerian software developer, with 7.5+ years of experience in web development, app development, robotics, cloud computing, and game development. I specialize in building robust applications, cloud platforms, and cutting-edge robotics solutions.</p>
      <p>A self-taught programmer, ranked among the top programmers in Port Harcourt, Nigeria, I am an active tech content creator, speaker, and mentor passionate about empowering others in tech.</p>
      </div>
     
    </motion.div>
    </Element>
   
  )
}

export default About
