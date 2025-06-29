import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'
import { MdHome } from 'react-icons/md'

const Header = () => {
    
  return ( 
   
      <div style={{borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 0.41)", backdropFilter: "blur(9px)", border: "0.1px solid grey" }} className='p-2 w-[290px] h-[60px] hover:cursor-pointer flex items-center fixed top-[25px] md:top-[50px] hover:w-[310px] hover:transition-all hover:duration-300 transition-all duration-300 z-[1000]'>
    
    <div className='flex justify-between w-full '>
        <div className='flex justify-center items-center gap-2' >
            <div className='hover:bg-neutral-200 transition-all flex justify-center items-center duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] '><FiHome className='text-[20px]' /></div>
            
             <div className='border w-[1px] h-[25px] f;ex items-center'></div>
        </div>
       <div className='flex justify-between gap-1'>
         <div className='hover:bg-neutral-200 transition-all duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] flex justify-center items-center'>
            <BsTwitterX />
        </div>
         <div className='hover:bg-neutral-200 transition-all duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] flex justify-center items-center'>
            <BsTwitterX />
        </div>
         <div className='hover:bg-neutral-200 transition-all duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] flex justify-center items-center'>
            <BsTwitterX />
        </div>
       </div>
       <div className='flex justify-center items-center gap-2'>
        <div className='border w-[1px] h-[25px] f;ex items-center'></div>
         <div className='hover:bg-neutral-200 transition-all duration-300 hover:transition-all hover:duration-300 rounded-lg w-[50px] h-[50px] flex justify-center items-center'>
            <BsTwitterX />
        </div>
       </div>
       
       
    </div>
      </div>
  
  )
}

export default Header
