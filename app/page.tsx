"use client"
import React from 'react'
import { MdDarkMode, MdNightlife, MdSunny } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeTheme } from './global/slice'
import Header from './(pages)/header'
import Hero from './(pages)/hero'
import Contact from './(pages)/contact'
import Carousel from './(pages)/carousel'
import Projects from './(pages)/projects'
import {motion} from 'motion/react'

const page = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
 

    <section className='flex justify-center '>
        <Header />
    </section>

    <motion.section   className='pt-[130px] md:pt-[150px] '>
      
        <Hero />
    </motion.section>

     <section className='pt-10 w-[100%]' >
    
      <Projects />
    </section>

   <section className='pt-10'>
      <Contact />
    </section>

   

    </div>
  )
}

export default page
