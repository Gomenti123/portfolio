import React from 'react'

const Contact = () => {
  return (
    <div > 
        <div className='w-full md:w-[500px] flex flex-col gap-5 '>
            <div className='flex flex-col gap-1'>
                 <h1 className='font-semibold text-[25px] md:text-[30px]'>Get in Touch</h1>
      <p className='text-[15px] text-neutral-600 font-light' >I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>
            </div>
            


      <form>
<div className='w-full flex flex-col gap-5'>
    <div className='flex flex-col md:flex-row w-full gap-3 md:justify-between'>
         <input placeholder='Full Name' className='p-3 w-full md:w-[250px] bg-[#ececec] h-[50px] border rounded-md' type="text" />
    <input placeholder='Email Address' className='p-3 w-full md:w-[250px] border bg-[#ececec] rounded-md' type="text" />
    </div>
   <textarea placeholder='Write Your Message' className='p-3 border rounded-md bg-[#ececec] h-[140px] w-full'  />

   <button className='bg-black text-white text-[20px] rounded-md w-full h-[50px]'>Semd Message</button>
</div>


      </form>
        </div>
     
    </div>
  )
}

export default Contact
