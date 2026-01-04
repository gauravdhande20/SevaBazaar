import React from 'react'
import { RiRecycleFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { PiCards } from "react-icons/pi";
import Purches from "../../public/Purches.json"
import { BrowserRouter } from "react-router-dom";

const iconMap = {
  card: <PiCards   size={30} className="text-[#4bf251]" />,
  team: < IoPeopleSharp size={30} className="text-[#4bf251]" />,
  recy: <RiRecycleFill size={30} className="text-[#4bf251]" />
};

function WhyPurchesCard(props) {
  return (
    <>
      <div className='w-auto h-auto bg-[#785a4e] rounded-4xl justify-center items-center  pb-9'>
        <div className=' align-middle flex flex-col justify-center items-center text-center  pt-6'>
          <div className='text-[#4cb04f] text-6xl mb-4 bg-[#5f854d] px-3 py-3 rounded-4xl'>{iconMap[props.icon]}</div>
          <h2 className='text-white text-1xl font-bold mb-2 items-center'>{props.title}</h2>
          <p className='text-[#baaba6] text-center max-w-md px-4'>{props.desc}</p>
        </div>


      </div>
    </>
  )
}

export default WhyPurchesCard
