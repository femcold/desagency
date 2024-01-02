import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import meeting from '../assets/meeting.jpg';

const TakeAction = () => {
  return (
    <div className="text-white px-6 lg:pt-10 lg:px-12 
    lg:flex items-center xl:max-w-[85vw] 2xl:max-w-[75vw] mx-auto"> 
      {/* Photo */}
      <div className="pt-8 order-2 h-[26rem] 
      overflow-hidden flex lg:w-[175%]">
        <img src={meeting} alt="" className="object-cover w-full h-full" />
      </div>
      {/* Description */}
      <div className="pt-10 order-1 lg:pr-12 max-w-[25rewm] flex flex-col">
        {/* Checkmarks */}
        <div className="flex items-center justify-between 
        mb-5 lg:mb-0 whitespace-nowrap gap-8">
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircle className="text-[24px]" /> 
            <p>24/7 Online Support</p>
          </div>
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircle className="text-[24px]"/> 
            <p>Quick Service</p>
          </div>
        </div>
        {/* About */}
        <div className="mb-5 lg:mb-0 pt-7">
          <p>Saving World with Good Designs. 
          Because your satisfaction is everything. 
          We are providing the best designs.</p>
        </div>
        {/* Button */}
        <div className="bg-[#6DFDB8] text-black font-semibold 
        py-4 px-4 w-[11rem] text-center self-start lg:self-auto mt-12">
          <p>START A PROJECT</p>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
