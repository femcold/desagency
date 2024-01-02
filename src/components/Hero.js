import React from 'react';
import { BsDribbble,BsInstagram,BsTwitter  } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io";



const Hero = () => {
  return (
    <div className="px-6 pt-12 lg:px-12 md:flex 
    md:justify-between xl:max-w-[85vw] 2xl:max-w-[75vw] mx-auto">
    <div className="text-white text-[55px] sm:text-[72px] 
    lg:text-[110px] font-semibold ">
      <p className="leading-[110%]">
      WE ARE <span className='text-[#6DFDB8]'>WEB3</span> 
      <br /> BASED DESIGN 
      <br /> AGENCY    
      </p>
    </div>
    <div className="flex items-end justify-end pt-4">
        <ul className="flex md:flex-col text-white gap-6 text-[22px] lg:text-[20px]">
            <li className="flex items-center gap-1 
            lg:gap-2 justify-end">
            <p className="hidden md:flex">Dribble</p><BsDribbble />
            </li>
            <li className="flex items-center gap-1 justify-end">
            <p className="hidden md:flex">Instagram</p><BsInstagram /> 
            </li>
            <li className="flex items-center gap-1 justify-end">
            <p className="hidden md:flex">Twitter</p><BsTwitter />
            </li>
        </ul>
    </div>
    </div>
    
  );
};

export default Hero;
