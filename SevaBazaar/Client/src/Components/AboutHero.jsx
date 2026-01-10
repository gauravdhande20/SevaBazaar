import React from 'react'

function AboutHero() {
    return (
        <>
            <section className='h-screen w-full bg-[#f2e4aa] flex items-center justify-center px-6 '>

                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

                    {/* left */}
                    <div>
                        <span> ● OUR STORY</span>
                        <h1 className="text-5xl font-extrabold text-[#6B4B3E] leading-tight">
                            Connecting Hearts,<br />
                            Empowering <span className="text-green-600 underline">Hands</span>{" "}

                        </h1>
                        <p className="text-gray-700 max-w-xl">
                            We are a mission-driven marketplace dedicated to bridging the
                            gap between local NGOs and conscious global consumers. We
                            believe that every handmade product tells a story of resilience

                            and hope.
                        </p>

                        <div>
                            <button className="bg-[#6B4B3E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a3f34] transition">
                                Learn More
                            </button>
                        </div>


                    </div>


                    {/* right */}
                    <div className='grid grid-cols-2 gap-6'>
                        <div className="col-span-1 rounded-3xl overflow-hidden shadow-lg">
                            {/* <img
              src={heroImg1}
              alt="Handmade weaving"
              className="w-full h-full object-cover"
            /> */}
                        </div>
                        <div className="bg-[#6B4B3E] text-white rounded-3xl flex items-center justify-center text-center p-6 shadow-lg">
                            <div>
                                <h2 className='text-2xl font-bold'>Our Mission</h2>
                                <p className='mt-4'>To empower local artisans and communities by providing a global platform for their handmade products, fostering sustainable livelihoods and cultural preservation.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center">
                            <div>
                                <h2 className='text-2xl font-bold'>Our Vision</h2>
                                <p className='mt-4'>To create a world where every artisan has the opportunity to thrive, and every purchase contributes to positive social and economic change.</p>
                            </div>
                        </div>



                    </div>


                </div>


            </section>
        </>
    )
}

export default AboutHero
