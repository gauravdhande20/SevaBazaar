import React from 'react'
import AboutMis from "../../public/AboutMis.json"
import { BrowserRouter } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
const iconMap = {
  mission: <IoFlagOutline  size={30} className="text-[#6e4d42]" />,
  vision: <IoMdEye  size={30} className="text-[#4bf251]  "/>
};

function MissViCard(props) {
  return (
    <>
   <div className='w-auto px-4 inline-block mt-3.5 py-12 bg-white rounded-2xl  shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='pl-3.5'> 
      <div className='p-3.5 rounded-2xl inline-block'style={{backgroundColor:`${props.color}`}} >
          {iconMap[props.icon]}
        </div>
        <h1 className='text-2xl font-bold text-[#6e4d42] pt-4'>{props.title}</h1>
        <p className='text-[#707070] pt-4'>{props.disc}</p>
    </div>

   </div>
      
    </>
  )
}

export default MissViCard
