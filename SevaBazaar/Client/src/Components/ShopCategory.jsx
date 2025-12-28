import React from 'react'
import Scategory from './Scategory.jsx'
import ShopCategor from '../../public/ShopCategory.json';

import { IoIosArrowRoundForward } from "react-icons/io";

function ShopCategory() {
  return (
    <>
    <section className='w-full h-auto bg-[#fff8e0] pb-7 '>

        <div className="headingSec flex justify-between items-center pt-7 pb-7 ml-10 mr-10">
            <div className='text-[#6e4d42] font-bold text-2xl'>Shop by Category</div>
            <div className='text-[#6e4d42] font-bold flex items-center gap-2'>View All Categories <IoIosArrowRoundForward className='text-3xl font-extrabold' /></div>
        </div>
        <div>
            {/* category cards */}
            <div className='w-full h-auto flex justify-center flex-wrap gap-8  '>
                {
                    ShopCategor.map(category => {
                        return (
                        <Scategory
                        key={category.id}
                        img={category.img}
                            title={category.title}
                            desc={category.desc}
                        />
                        )
                    }
                    )
                }
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default ShopCategory
