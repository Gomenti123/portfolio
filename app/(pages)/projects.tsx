import React from 'react'

const Projects = () => {
    const projects = [{title: "Growing Old", content: "This is the content"}, {title: "Growing Old", content: "This is the content"},{title: "Growing Old", content: "This is the content"},{title: "Growing Old", content: "This is the content"}]
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-[30px] font-semibold text-center leading-[30px]'>Here's What i've been up to.</h1>
        {projects.map((el)=>(
            <div className='bg-neutral-500 w-full min-h-[200px] rounded-md '> 

     </div>
        ))}
     
    </div>
  )
}

export default Projects
