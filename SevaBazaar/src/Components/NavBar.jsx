import React from 'react'
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <section className="bg-[#f2e4aa] text-[#6e4d42] p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">NGOMart</h1>
          <div className="Serach flex gap-14 items-center bg-[#faf4dc] pl-3 pr-19 py-3 rounded-[15px]"> <FaSearch /><input className='border-none' type="text"  placeholder='Search for handmade products, NGOs...' /></div>
        <nav className="flex space-x-4 flex items-center gap-8">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Stories</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
        <div className="icons flex gap-6 items-center">
        <button className='bg-transparent border-2 border-[#704f43] text-[#704f43] px-3 py-1 rounded-[10px] font-bold'>Join as NGO</button>
        <button className='bg-[#704f43] text-white px-4 py-1.5 rounded-[10px] font-bold'>Login</button>
        </div>

      </section>
    </div>
  )
}

export default NavBar
