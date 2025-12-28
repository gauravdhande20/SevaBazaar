import React from 'react'

import { BrowserRouter } from "react-router-dom";

function Scategory(props) {
  return (
    <>

      <div className='h-[45vh] w-[40vh] mr-auto ml-auto mt-10 rounded-3xl  flex items-center flex-col relative'>
        <div className="w-[100%] h-[75%] bg-amber-300 rounded-2xl bg-center bg-cover flex justify-between" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div className='"  inline-block w-[100%] mt-4 pl-1.5'>
          <h1 className='text-[#2e2e2e] font-bold '>{props.title}</h1>
          <h1 className='text-[#7a6156]  '>{props.desc}</h1>

        </div>


      </div>





    </>
  )
}

export default Scategory
