"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const form:any = useRef("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9qaedh","template_q5x1j5g", form.current, {
        publicKey: 'nW-b6ovwtoUxHS3YJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmail("")
          setName("")
          setMessage("")
          {toast("Message Sent")}
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div > 
        <div className='w-full md:w-[500px] flex flex-col gap-5 '>
            <div className='flex flex-col gap-1'>
                 <h1 className='font-semibold text-[25px] md:text-[30px]'>Get in Touch</h1>
      <p className='text-[15px] text-neutral-600 font-light' >I'm always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to book a call or email me if you'd like to see my portfolio deck or to discuss a potential project.</p>
            </div>
            


      <form ref={form} onSubmit={sendEmail}>
<div className='w-full flex flex-col gap-5'>
    <div className='flex flex-col md:flex-row w-full gap-3 md:justify-between'>
         <input value={name} onChange={(e:any)=>{setName(e.target.value)}} required name='name' placeholder='Full Name' className='p-3 w-full md:w-[250px] bg-[#ececec] h-[50px] border rounded-md' type="text" />
    <input value={email} onChange={(e:any)=>{setEmail(e.target.value)}}  required name='email' placeholder='Email Address' className='p-3 w-full md:w-[250px] border bg-[#ececec] rounded-md' type="text" />
    </div>
   <textarea value={message} onChange={(e:any)=>{setMessage(e.target.value)}}  required name='message' placeholder='Write Your Message' className='p-3 border rounded-md bg-[#ececec] h-[140px] w-full'  />

   <button type='submit' className='bg-black text-white text-[20px] rounded-md w-full h-[50px]'>Send Message</button>
</div>


      </form>
        </div>
     <div>
        
     </div>
    </div>
  )
}

export default Contact
