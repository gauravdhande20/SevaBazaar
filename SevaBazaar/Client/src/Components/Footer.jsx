import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-[#2e2e2e] ">
                <div className="bg-[#2e2e2e] p-6 mt-10 shadow-inner flex justify-around text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-b-2 border-[#949ba6] ">

                    <div className="container-1 list-none flex flex-col gap-4">
                        <h1 className='font-extrabold text-2xl text-white'>NGOMart</h1>
                        <p className='text-[#949ba6]'>Connecting conscious consumers with
                            NGOs and artisans. Shop with purpose
                            and empower communities.
                        </p>
                        <div className="icons flex gap-4">
                            <div className='w-[45px] h-[45px] bg-[#424242] rounded-[50%] text-white items-center flex justify-center text-2xl'><FaFacebook /> </div>
                            <div className='w-[45px] h-[45px] bg-[#424242] rounded-[50%] text-white items-center flex justify-center text-2xl'><FaTwitter /> </div>
                            <div className='w-[45px] h-[45px] bg-[#424242] rounded-[50%] text-white items-center flex justify-center text-2xl'><IoMdMail /> </div>
                        </div>
                    </div>

                    <div className="container-2 list-none flex flex-col gap-2 text-[#949ba6]">
                        <h1 className='font-extrabold text-2xl text-white'>Shop</h1>

                        <li><a href="">All Product </a></li>
                        <li><a href="">Woolen Items</a></li>
                        <li><a href="">Handicarft</a></li>
                        <li><a href="">Home & Living</a></li>
                        <li><a href="">Eco Friendly</a></li>
                    </div>

                    <div className="container-3 list-none flex flex-col gap-2 text-[#949ba6]">
                        <h1 className='font-extrabold text-2xl text-white'>For Partners</h1>

                        <li><a href="">Register as NGO </a></li>
                        <li><a href="">Seller Dashboard</a></li>
                        <li><a href="">Success Stories</a></li>
                        <li><a href="">Partner Guidelines</a></li>

                    </div>

                    <div className="container-4 list-none flex flex-col gap-2 text-[#949ba6]">
                        <h1 className='font-extrabold text-2xl text-white'>Stay Updated</h1>

                        <p>Subscribe to our newsletter for new
                            arrivals and impact stories.</p>

                        <div className="subscribe flex gap-2">
                            <input className='p-2 rounded-[10px] border-2 border-[#616161]' type="text" placeholder='Enter your email' />
                            <button className='bg-[#704f43] text-white px-4 py-2 rounded-[10px] font-bold'><FaArrowRight /></button>
                        </div>

                    </div>
                </div>

                <div className="bg-[#2e2e2e] p-4 text-center text-[#949ba6] flex justify-between flex-col md:flex-row items-center">
                    <p>&copy; 2024 NGOMart. All rights reserved.</p>

                    <div className='flex justify-center gap-6 mt-2 text-[#949ba6]'>
                        <a href="#" className="hover:underline px-4">Privacy Policy</a>
                        <a href="#" className="hover:underline px-4">Terms of Service</a>
                        <a href="#" className="hover:underline px-4">Contact Us</a>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer
