import React from 'react'
import Platform from "../../public/Platform.json"
import { IoHome } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const iconseet={
    home:<IoHome size={30} className="text-[#6e4d42]" />,
    earth:<FaEarthAmericas size={30} className="text-[#4bf251]  "/>,
    heart:<CiHeart size={30} className="text-[#6e4d42]  "/>
};

function Platformcard(props) {
  return (
    <>
      <div className='w-auto px-4 inline-block  py-12 rounded-2xl  '>
    <div className='pl-3.5 flex flex-col items-center justify-center text-center'> 
      <div className='p-3.5 rounded-4xl inline-block'style={{backgroundColor:"white"}} >
          {iconseet[props.icon]}
        </div>
        <h1 className='mt-4 font-bold text-[#6e4d42] pt-4'>{props.heading}</h1>
        <p className='text-[#707070] pt-4'>{props.dis}</p>
    </div>

   </div>
    </>
  )
}

export default Platformcard
