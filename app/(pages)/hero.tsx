import React from 'react'

const Hero = () => {
  return (
    <div className='w-[100%] md:w-[500px] flex flex-col gap-5'>
        <div className='rounded-full w-[100px] h-[100px] bg-neutral-400'></div>
        <h1 className='md:text-[45px] text-[30px] font-medium'>Hello, I'm <br /> James Gomenti </h1>
      <p className={`text-[18px] leading-[31px] font-light text-neutral-500`}>I am a <strong className={``}>frontend developer</strong> I have a strong background in creating visually appealing and <strong className={``}>ser-friendly web experiences.</strong> u I am motivated to find a role where I can challenge myself <strong className={``}>and provide value to website users.</strong>  I am excited to bring my knowledge and experience to a team and contribute to a company's success.</p>

      <div className='relative'>
         <button className={`p-2 w-[130px] h-[40px]   font-bold-[10px] text-[17px]  bg-neutral-700 text-white  `}>View Resumè</button>
        <div className={`w-[130px] h-[40px] absolute top-[9px] left-[8px]  border-[2px]   hover:top-0 hover:left-0 hover:transition-all hover:duration-300 transition-all duration-300  border-neutral-700`}></div>
      </div>
      
      </div>
  )
}

export default Hero
