import React from 'react'

const Projects = () => {
    const projects = [{title: "Growing Old", content: "This is the content"}, {title: "Growing Old", content: "This is the content"},{title: "Growing Old", content: "This is the content"},{title: "Growing Old", content: "This is the content"}]
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-[30px] font-semibold text-center leading-[30px]'>Here's What i've been up to.</h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-5'>
           {projects.map((el)=>(
            <div className='border w-full  min-h-[300px] rounded-[25px] '> 

     </div>
        ))}
     
        </div>
       
    </div>
  )
}

export default Projects
