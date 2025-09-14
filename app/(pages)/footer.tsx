import React from 'react'
import { FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full'>
        <hr />
        <div className='flex items-center gap-1 w-full justify-center pt-10 text-neutral-600'>
            <p>Copyright</p>
            <FaRegCopyright /> 
            <p>James Gomenti</p>
        </div>
      
      
    </div>
  )
}

export default Footer
