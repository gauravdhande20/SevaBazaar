import React from 'react'
import Cards from './Cards'

import itemdata from './../../public/items.json'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

function BasicCard() {
    return (
        <>
            <section className='h-auto w-full bg-[#f2e4aa]  '>
                <div className='flex justify-between items-center pt-12  ml-10 mr-10'>
                    <h1 className='text-[#6e4d42] font-bold text-2xl'>Featured NGO Products</h1>
                    <div className='flex justify-end gap-4 mr-10 mt-2 items-center m'>   
                             <FaCircleArrowLeft className='text-[#7a6156] text-3xl'/>
                            <FaCircleArrowRight className='text-[#7a6156] text-3xl' /></div>
                    
                </div>
                <div className='grid grid-cols-4 gap-4 mt-4 mb-10 ml-10 mr-10'>
                    {
                        itemdata.map(item => {
                            return (
                                <Cards
                                key={item.id} 
                                    id={item.id}
                                    url={item.url}
                                    color={item.color}
                                    offer={item.offer}
                                    off={item.off}
                                    Catg={item.Catg}
                                    Name={item.Name}
                                    quantity={item.quantity}
                                    price={item.price}
                                    prv_price={item.prv_price}
                                />)
                        })
                    }

                </div>



            </section>

        </>
    )
}

export default BasicCard
