import React from 'react'
import Platform from "../../public/Platform.json"
import Platformcard from './Platformcard'

function About3() {
    return (
        <>
            <section className='w-full py-10 bg-[#f2e4aa] flex flex-col justify-center items-center'>
                <div className="upper flex flex-col items-center justify-center">
                    <h1 className='text-[#4cb04f] font-bold'>THE PLATFORM</h1>
                    <div className='text-[#6e4d42] text-2xl font-bold mt-4 '>Bridging the Gap</div>
                    <div className='mt-3.5 '>Many NGOs struggle with marketing and logistics. Our platform handles the technology,
                        so they can focus on what they do best: creating impact.</div>

                </div>

                <div className='w-full px-10 md:px-20 lg:px-32 xl:px-44 2xl:px-60 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        Platform.map((item) => (
                            <Platformcard
                                key={item.id}
                                icon={item.icon}
                                heading={item.heading}
                                dis={item.dis}
                              
                            />
                        ))
                    }
                </div>

            </section>

        </>
    )
}

export default About3
