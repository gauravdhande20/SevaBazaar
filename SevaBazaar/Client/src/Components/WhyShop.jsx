import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { MdRecycling } from "react-icons/md";
import { SiBetfair } from "react-icons/si";
import WhyPurchesCard from './WhyPurchesCard';
import Purches from '../../public/Purches.json'

function WhyShop() {
  return (
    <>
      <div className='w-full h-auto py-10 bg-[#705044]'>
        <div className="heading flex flex-col justify-center items-center text-center text-white gap-4">
          <h1 className='text-2xl font-bold'>Your Purchase Makes a Difference</h1>
          <p className='px-100'>By shopping on NGO Market, you are directly supporting sustainable
            livelihoods and community development projects worldwide.
          </p>
        </div>

        {/* category cards */}
            <div className='w-full h-auto flex gap-5 px-5 mt-9'>
                {
                  

                    Purches.map(item => {
                        return (
                        <WhyPurchesCard
                        key={item.id}
                        icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                        )
                    }
                    )
                }
            </div>
      </div>

    </>
  )
}

export default WhyShop
