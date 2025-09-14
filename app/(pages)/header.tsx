import React from 'react'
import { BsPerson, BsTwitterX } from 'react-icons/bs'
import { FaPersonCircleQuestion } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdHome } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'
import { Link } from 'react-scroll'

const Header = () => {
    
  return ( 
   
      <div style={{borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.41)", backdropFilter: "blur(9px)", border: "0.1px solid grey" }} className='p-2 w-[290px] h-[60px] hover:cursor-pointer flex items-center fixed top-[25px] md:top-[50px] hover:w-[310px] hover:transition-all hover:duration-300 transition-all duration-300 z-[1000]'>
    
    <div className='grid grid-cols-12 justify-between w-full '>
        <div className='col-span-3 flex justify-center items-center gap-2' >
            <div className='hover:bg-neutral-200 transition-all flex justify-center items-center duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] '>
             
               <Link to='hero' duration={1000} smooth={true}><FiHome className='text-[20px]'/></Link></div>
            
             <div className='border w-[1px] h-[25px] flex items-center'></div>
        </div>
        <div className='col-span-9 px-1 flex justify-between'>
           <div className='flex justify-between gap-1'>
         <div className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <Link to='about' duration={1000} smooth={true}>
          <p className='text-[10px] font-semibold'>About Me</p>
           </Link>
        </div>
       </div>
         <div className='flex justify-between gap-1'>
         <div className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <Link to='projects' duration={1000} smooth={true}>
          <p className='text-[10px] font-semibold'>Projects</p>
           </Link>
        </div>
       </div>
         <div className='flex justify-between gap-1'>
         <div className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <Link to='contact' duration={1000} smooth={true}>
          <p className='text-[10px] font-semibold'>Contact
          </p>
           </Link>
        </div>
       </div>
      
        </div>
      
       
       
      
    </div>
      </div>
  
  )
}

export default Header
