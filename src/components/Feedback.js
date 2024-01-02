import React from 'react';
import { FaQuoteRight } from "react-icons/fa";


const Feedback = () => {
  return (
    <div className="text-white px-6 lg:pt-10 lg:px-12 xl:max-w-[85vw] 
    2xl:max-w-[75vw] mx-auto ext-white pt-6 lg:flex flex-col items-center">
    <p className='text-[50px] sm:text-[65px] 
    lg:text-[90px]'>CLIENT FEEDBACK</p>
    <div className="flex items-center">
    <FaQuoteRight className="text-[60px] md:text-[80px] shrink-0"/>
    <p className='max-w-[30rem] md:text-[20px] pl-8'>
    Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Aspernatur, labore! 
    Dolorum magnam rerum amet eligendi 
    eaque nihil perferendis, voluptatem 
    impedit aspernatur reprehenderit iste, 
    consectetur minima ipsum. Tempore dolorem tempora vel.</p>
    </div>

    </div>
  )
}

export default Feedback
