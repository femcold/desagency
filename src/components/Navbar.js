import React from 'react';
import logo from '../assets/logo1.png';

const Navbar = () => {
  return <div className="px-6 lg:px-12 lg:pt-4  flex items-center justify-between">
    
    <div className="h-[5rem] flex items-center">
    <img src={logo} alt="" className=" w-36"/>
    </div>
    <div className="">
        <ul className=" flex items-center text-white gap-8">
            <li className='hidden sm:flex'>Home</li>
            <li className='hidden sm:flex'>About Us</li>
            <li>Portfolio</li>
            <li className='hidden sm:flex'>Reviews</li>
            <li>Contact Us</li>

        </ul>
        
    
    </div>
  </div>
 
  
};

export default Navbar;
