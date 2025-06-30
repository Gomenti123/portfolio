import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCss, MdHtml } from 'react-icons/md';
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiShadcnui, SiVite } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

const Carousel = () => {
    const settings = {
    dots: false,
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
     <div style={{boxShadow: "inset 10px 20px 20px #fefefe", width: "140px",zIndex: "1000", border:"none" }}>
        <Slider {...settings} className='text-[30px]  text-neutral-400  '>

      <FaHtml5 className='text-[#fefefe]' />
      <FaCss3 />
      <FaReact />
      <FaGitAlt />
      <SiMongodb />
      <SiShadcnui />
      <RiNextjsFill />
      <SiVite />
      <FaGithub />
      <FaNodeJs />
      <FaJs />
      
   
    </Slider>
     </div>
    
    
  )
}

export default Carousel
