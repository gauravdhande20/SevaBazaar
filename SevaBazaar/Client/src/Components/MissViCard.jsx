import React from 'react'
import AboutMis from "../../public/AboutMis.json"
import { BrowserRouter } from "react-router-dom";

function MissViCard(props) {
  return (
    <>
   <div className='w-auto px-4 inline-block mt-3.5 py-15 bg-white rounded-2xl  shadow-lg hover:shadow-xl transition-shadow duration-300'>
    <div className='pl-3.5'> 
        <h1 className='text-2xl font-bold text-[#6e4d42] pt-4'>{props.title}</h1>
        <p className='text-[#707070] pt-4'>{props.disc}</p>
    </div>

   </div>
      
    </>
  )
}

export default MissViCard
