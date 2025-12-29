import React,{useState,useEffect} from 'react'
import Cards from './Cards'

import itemdata from './../../public/items.json'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
// import { useEffect, useState } from 'react'

function BasicCard() {
    const [cardslider,setcateslide]=useState(0);

    const next=()=>{
        if(cardslider==2)return false;
        setcateslide(cardslider+1);
    }

    const prev=()=>{
        if(cardslider==0)return false;
        setcateslide(cardslider-1);
    }
    console.log(cardslider);

    return (
        <>
            <section className='h-screen w-full bg-[#f2e4aa]   '>
                <div className='flex justify-between items-center pt-12  ml-10 mr-10'>
                    <h1 className='text-[#6e4d42] font-bold text-2xl'>Featured NGO Products</h1>
                    <div className='flex justify-end gap-4 mr-10 mt-2 items-center m'>   
                             <FaCircleArrowLeft className='text-[#7a6156] text-3xl'onClick={prev} />
                            <FaCircleArrowRight className='text-[#7a6156] text-3xl' onClick={next}/></div>
                    
                </div>
                <div className=' h-autow-[150vw] absolute grid grid-cols-8 grid-rows-1 gap-78  mt-4  mb-10 ml-6 'style={{ transform: `translateX(-${cardslider * 29}%)`,
                 transition: 'transform 0.5s ease-in-out' }}>
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
