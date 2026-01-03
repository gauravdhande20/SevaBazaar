import React from 'react'
import MissViCard from './MissViCard'
import AboutMis from "../../public/AboutMis.json"


function Aboutmiss() {
  return (
    <>
     <section className='bg-[#fff8e0] w-full py-10  flex gap-19 px-6'>
       {
        AboutMis.map(qwe =>{
            return(
                <MissViCard
                key={qwe.id}
                title={qwe.title}
                disc={qwe.disc}
                
                />
            )
        })
       }

        
    </section>
      
    </>
  )
}

export default Aboutmiss
