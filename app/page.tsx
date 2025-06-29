"use client"
import React from 'react'
import { MdDarkMode, MdNightlife, MdSunny } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeTheme } from './global/slice'
import Header from './(pages)/header'
import Hero from './(pages)/hero'
import Contact from './(pages)/contact'

const page = () => {
  return (
    <div className='w-full min-h-screen'>
 

    <section className='flex justify-center '>
        <Header />
    </section>

    <section className='pt-[130px] md:pt-[150px] '>
        <Hero />
    </section>

   <section className='pt-10'>
      <Contact />
    </section>

    </div>
  )
}

export default page
