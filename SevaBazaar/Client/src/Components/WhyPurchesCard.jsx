import React from 'react'
import { FaPeopleRoof } from "react-icons/fa6";

function WhyPurchesCard() {
  return (
    <>
      <div className='w-85 h-65 bg-amber-600 rounded-4xl justify-center items-center m-20'>
        <div className=' align-middle flex flex-col justify-center items-center text-center pt-6'>
          <FaPeopleRoof className='text-white text-6xl mb-4' />
          <h2 className='text-white text-1xl font-bold mb-2 items-center'>Why Purchase From SevaBazaar?</h2>
          <p className='text-white text-center max-w-md px-4'>
            By purchasing from SevaBazaar, you are directly supporting local NGOs and artisans, helping to create sustainable livelihoods and empower communities. Your purchase makes a difference!
          </p>
        </div>

      </div>
    </>
  )
}

export default WhyPurchesCard
